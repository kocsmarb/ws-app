import * as Types from '../../schemas';
export const BASKET_ADD_ITEM = 'BASKET_ADD_ITEM';
export const BASKET_REMOVE_ITEM = 'BASKET_REMOVE_ITEM';
export const BASKET_RESET = 'BASKET_RESET';

export interface BasketAddItemAction {
  type: typeof BASKET_ADD_ITEM;
  item: Types.Product;
}

export interface BasketRemoveItemAction {
  type: typeof BASKET_REMOVE_ITEM;
  id: Types.Id;
}

export interface BasketResetAction {
  type: typeof BASKET_RESET;
}

export type BasketActions = 
 | BasketAddItemAction
 | BasketRemoveItemAction
 | BasketResetAction
;