import * as actionTypes from './action-types/basket.types';
import * as Types from '../schemas';
import { BASKET_PRICE_LIMIT, BASKET_ERROR_PRICE } from '../../config';
import { enqueueSnackbar } from '../actions/snackbar';
import { AppState } from '../reducers';
import { BasketItems } from '../reducers/basket';
import { AnyAction } from 'redux';

const _addItem = (item: Types.Product): actionTypes.BasketAddItemAction => ({
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

export const getTotalPrice = (items: BasketItems) =>
  Object.keys(items)
    .map(k => items[k])
    .reduce((sum, i) => i.quantity * i.product.price + sum, 0);

export const validatePrice = (totalPrice: number, nexProduct: Types.Product) => {
  if (totalPrice && totalPrice + nexProduct.price === BASKET_ERROR_PRICE) {
    throw new Error('Critical Generated Bug - price error...');
  }
};

export const addItemIfNotReachThePriceLimit = (
  totalPrice: number,
  nexProduct: Types.Product,
): AnyAction => {
  return totalPrice >= BASKET_PRICE_LIMIT
    ? enqueueSnackbar(
        `You have reached the price limit of a basket, which is ${BASKET_PRICE_LIMIT} Ft.`,
        { variant: 'warning' },
      )
    : _addItem(nexProduct);
};

export const addItem = (item: Types.Product) => (dispatch: Function, getState: () => AppState) => {
  const {
    basket: { items },
  } = getState();

  const totalPrice = getTotalPrice(items);
  validatePrice(totalPrice, item);
  dispatch(addItemIfNotReachThePriceLimit(totalPrice, item));
};
