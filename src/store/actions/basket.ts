import * as actionTypes from './action-types/basket.types';
import * as Types from '../schemas';
import { BASKET_PRICE_LIMIT, BASKET_ERROR_PRICE } from '../../config';
import { enqueueSnackbar } from '../actions/snackbar';

export const _addItem = (item: Types.Product): actionTypes.BasketAddItemAction => ({
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

export const addItem = (item: Types.Product) => (dispatch: Function, getState: Function) => {
  const {
    basket: { items },
  } = getState();

  const totalPrice = Object.keys(items)
    .map(k => items[k])
    .reduce((sum, i) => i.quantity * i.product.price + sum, 0);

  if (totalPrice && totalPrice + item.price === BASKET_ERROR_PRICE){
    throw new Error('Critical - price error...');
  }

  if (totalPrice >= BASKET_PRICE_LIMIT) {
    dispatch(
      enqueueSnackbar(
        `You have reached the price limit of a basket, which is ${BASKET_PRICE_LIMIT} Ft.`,
        { variant: 'warning' },
      ),
    );
  } else {
    dispatch(_addItem(item));
  }
};
