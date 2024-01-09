import type { AnyAction, Middleware, MiddlewareAPI } from 'redux';
import { TwsOrdersAllActions } from '../actions/feed-ws';
import { TwsOrdersUserActions } from '../actions/order-user-ws';
import { getCookie } from '../../utils/cookie';
import { AppDispatch, RootState } from '../store';

type wsActionsTypes = TwsOrdersAllActions | TwsOrdersUserActions;

export const socketMiddleware = (wsActions: wsActionsTypes): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    let timerWsReconnect = 0;
    let isWsConnected = false;
    let url = '';
  
    return next => (action) => {
      const { dispatch } = store;

      if (action.type === wsActions.onStart) {
        url = action.url;
        if (action.addToken) {
          url += `?token=${getCookie('accessToken')}`;
        }

        socket = new WebSocket(url);
        console.log('wsCreated')
           
        isWsConnected = true;
        window.clearTimeout(timerWsReconnect);
        dispatch({ type: wsActions.onSuccess });
      }
      
      if (socket) {
        socket.onopen = () => {
            console.log('onopen')
            dispatch({ type: wsActions.onOpen });
        };

        socket.onclose = event => {
            if (event.code !== 1000) {
                console.log('onclose')
                dispatch({ type: wsActions.onError });
                socket?.close();
          }
        if (isWsConnected) {
            dispatch({ type: wsActions.onClosed });
            timerWsReconnect = window.setTimeout(() => {
              dispatch({ type: wsActions.onStart, url: url });
            }, 30000)
          }
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
            dispatch({ type: wsActions.onMessage, message: parsedData });
          }

        socket.onerror = event => {
            dispatch({ type: wsActions.onError, error:event.type });
        };

        if (action.type === wsActions.onDisconnect) {
          window.clearTimeout(timerWsReconnect);
          isWsConnected = false;
          timerWsReconnect = 0;
          socket.close();
          dispatch({ type: wsActions.onClosed });
        }
      }
      next(action);
    };
  };
};