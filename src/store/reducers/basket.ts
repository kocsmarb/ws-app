import * as actionTypes from '../actions/action-types';
import * as Types from '../schemas';

export type BasketItem = {
  product: Types.Product;
  quantity: number;
};

export type BasketItems = {
  [s: string]: BasketItem;
};

type BasketState = {
  items: BasketItems;
  totalQuantity: number;
};

const initialState: BasketState = {
  items: {},
  totalQuantity: 0,
};

const addItem = (state: BasketState, product: Types.Product): BasketState => {
  const item = state.items[product.id];
  return {
    ...state,
    items: {
      ...state.items,
      [product.id]: {
        product: { ...product },
        quantity: item ? item.quantity + 1 : 1,
      },
    },
    totalQuantity: state.totalQuantity + 1,
  };
};

const removeItem = (state: BasketState, id: Types.Id): BasketState => {
  const items = { ...state.items };
  if (!items[id]) return state;
  if (items[id].quantity === 1) {
    delete items[id];
  } else {
    // TODO: Redux conceptional problem - should not manipulate the state directly
    items[id].quantity = items[id].quantity - 1;
  }
  return {
    ...state,
    items,
    totalQuantity: state.totalQuantity - 1,
  };
};

export default function basketReducer(
  state = initialState,
  action: actionTypes.BasketActions,
): BasketState {
  switch (action.type) {
    case actionTypes.BASKET_ADD_ITEM:
      return addItem(state, action.item);
    case actionTypes.BASKET_REMOVE_ITEM:
      return removeItem(state, action.id);
    case actionTypes.BASKET_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
