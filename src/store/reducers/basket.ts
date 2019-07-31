import * as actionTypes from '../actions/action-types';
import * as ProductTypes from '../schemas/product';

export type BasketItem = {
  product: ProductTypes.Product,
      quantity: number,
};

export type BasketItems = {
  [s: string]: BasketItem
};

type BasketState = {
  items: BasketItems,
  totalQuantity: number,
};

const initialState: BasketState = {
  items: {},
  totalQuantity: 0,
};

const addItem = (state: BasketState, product: ProductTypes.Product): BasketState => {
  const item = state.items[product.id];
  return {
    ...state,
    items: {
      ...state.items,
      [product.id]: {
        product: {...product},
        quantity: item ? item.quantity + 1 : 1,
      },
    },
    totalQuantity: state.totalQuantity + 1,
  };
};

const removeItem = (state: BasketState, id: ProductTypes.Id): BasketState => {
  const items = { ...state.items };
  if(!items[id]) return state;
  if(items[id].quantity === 1){
     delete items[id];
  } else {
    // Redux conceptional problem - should not manipulate the state directly
    items[id].quantity = items[id].quantity -1;
  }
  return {
    ...state,
    items,
    totalQuantity: state.totalQuantity - 1,
  };
};

export default function basketReducer(state = initialState, action: any): BasketState {
  switch (action.type) {
    case actionTypes.BASKET_ADD_ITEM:
      return addItem(state, action.item);
    case actionTypes.BASKET_REMOVE_ITEM:
      return removeItem(state, action.id);
    default:
      return state;
  }
}