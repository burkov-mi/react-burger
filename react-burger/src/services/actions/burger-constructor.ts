import { TIngredient } from "../../utils/types/ingredient";
import { ADD_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, TEST } from "./constants";



interface IAddBun {
	readonly type: typeof ADD_BUN
	readonly bun: TIngredient
}

interface IAddIngredient {
	readonly type: typeof ADD_INGREDIENT
	readonly ingredient: TIngredient
}

interface ITEST {
	readonly type: typeof TEST;
}

interface IDeleteIngredient {
	readonly type: typeof DELETE_INGREDIENT
	readonly id: string
}

interface IMoveIngredient {
	readonly type: typeof MOVE_INGREDIENT
	readonly dragIndex: number
	readonly hoverIndex: number
}


export type TConstructorActions = 
	| IAddBun
	| IAddIngredient
	| IDeleteIngredient
	| IMoveIngredient
	| ITEST

export const addBun = (bun: TIngredient): IAddBun => ({
	type: ADD_BUN,
	bun: bun,
})

export const addIngredient = (ingredient: TIngredient): IAddIngredient => ({
	type: ADD_INGREDIENT,
	ingredient: ingredient,
})

export const deleteIngredient = (id: string): IDeleteIngredient => ({
	type: DELETE_INGREDIENT,
	id: id,
})

export const moveIngredient = (
	dragIndex: number,
	hoverIndex: number
): IMoveIngredient => ({
	type: MOVE_INGREDIENT,
	dragIndex: dragIndex,
	hoverIndex: hoverIndex,
})