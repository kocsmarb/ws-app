import * as actionTypes from '../actions/action-types';
import * as Types from '../schemas';

type ProductsState = {
  items: Types.Product[],
  categories: Types.Category[],
};

const initialState: ProductsState = {
  items: [],
  categories: [],
};

export default function products(state = initialState, action: actionTypes.ProductsActions): ProductsState {
  switch (action.type) {
    case actionTypes.PRODUCTS_RECEIVE:
      return {
        ...state,
        items: [...action.items],
      };
    case actionTypes.CATEGORIES_RECEIVE:
      return {
        ...state,
        categories: [...action.items],
      };
    default:
      return state;
  }
}
