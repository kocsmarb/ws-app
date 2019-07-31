import * as actionTypes from '../actions/action-types';
import * as ProductTypes from '../schemas/product';

type ProductsState = {
  items: ProductTypes.Product[],
  categories: ProductTypes.Category[],
};

const initialState: ProductsState = {
  items: [],
  categories: [],
};

export default function products(state = initialState, action: any): ProductsState {
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