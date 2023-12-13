
import { configureStore } from '@reduxjs/toolkit';
import { burgerConstructorReducer } from './burger-constructor';
import { burgerIngredientsReducer } from './burger-ingredients';
import { makeOrderReducer } from './make-order';
import { selectTabReducer } from './tabs';
import { userReducer } from './user';

const rootReducer = {
    constructorBurger: burgerConstructorReducer,
    ingredients: burgerIngredientsReducer,
    currentTab: selectTabReducer,
    makeOrder: makeOrderReducer,
    user: userReducer,
};

export const store = configureStore({
  reducer: rootReducer
})


//export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch
