import * as actionTypes from './action-types/basket.types';
import * as Types from '../schemas';

export const addItem = (item: Types.Product): actionTypes.BasketAddItemAction => ({
  type: actionTypes.BASKET_ADD_ITEM,
  item,
});

export const removeItem = (id: Types.Id): actionTypes.BasketRemoveItemAction => ({
  type: actionTypes.BASKET_REMOVE_ITEM,
  id,
});

export const reset = (): actionTypes.BasketResetAction => ({
  type: actionTypes.BASKET_RESET,
});
