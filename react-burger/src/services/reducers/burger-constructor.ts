import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT } from "../actions/constants";
import { TIngredient} from "../../utils/types/ingredient";
import { TConstructorActions } from "../actions/burger-constructor";
import { TOrder } from "../../utils/types/order";
import update from 'immutability-helper'
import { AnyAction } from "redux";

export type TConstructorState = {
	bun: TIngredient | null
	ingredients: Array<TIngredient>
}


const initialState: TConstructorState = {
  bun: null,
  ingredients: [], 
};

export const burgerConstructorReducer = (state = initialState, action: TConstructorActions): TConstructorState => {
  switch( action.type ){
    case ADD_BUN: {
      return {
        ...state,
        bun: action.bun,
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient]
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(el => el.id !== action.id)
      }
    }
    case MOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: update(state.ingredients, {
          $splice: [
            [action.dragIndex, 1],
            [action.hoverIndex, 0, state.ingredients[action.dragIndex]],
          ]
        })
      }
    }
    
    default: {
      return state;
    }
  }
}