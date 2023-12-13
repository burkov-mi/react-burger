import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT } from "../actions/burger-constructor";
import update from 'immutability-helper';
import { AnyAction } from 'redux';
import { TIngredientShort } from "../../utils/types/ingredient";

const initialState = {
  bun: null,
  ingredients: [], 
};

export const burgerConstructorReducer = (state = initialState, action:AnyAction) => {
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
        ingredients: [...state.ingredients].filter((el: TIngredientShort) => el.id !== action.id)
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