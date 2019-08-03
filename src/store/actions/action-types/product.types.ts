import * as Types from '../../schemas';
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_RECEIVE = 'PRODUCTS_RECEIVE';
export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_RECEIVE = 'CATEGORIES_RECEIVE';

export interface ProductsReceiveAction {
  type: typeof PRODUCTS_RECEIVE;
  items: Types.Product[];
}

export interface CategoriesReceiveAction {
  type: typeof CATEGORIES_RECEIVE;
  items: Types.Category[];
}

export type ProductsActions = 
 | ProductsReceiveAction
 | CategoriesReceiveAction
;