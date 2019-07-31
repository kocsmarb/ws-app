import * as actionTypes from './action-types';
import * as ProductTypes from '../schemas/product';

export const addItem = (item: ProductTypes.Product) => ({
  type: actionTypes.BASKET_ADD_ITEM,
  item,
});

export const removeItem = (id: ProductTypes.Id) => ({
  type: actionTypes.BASKET_REMOVE_ITEM,
  id,
});