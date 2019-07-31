import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import {
  PRODUCTS_REQUEST,
  PRODUCTS_RECEIVE,
  CATEGORIES_RECEIVE,
  CATEGORIES_REQUEST,
} from './action-types';
import * as ProductTypes from '../schemas/product';
import client from '../../core/graphql/client';
import { PRODUCTS_BY_CATEGORY_QUERY } from '../../core/graphql/operations/products';
import { CATEGORIES_QUERY } from '../../core/graphql/operations/categories';

export const request = () => ({
  type: PRODUCTS_REQUEST,
});

export const receive = (items: ProductTypes.Product[]) => ({
  type: PRODUCTS_RECEIVE,
  items,
});

export const fetch = ({ category }: { category: string }): ThunkAction<void, AppState, null, AnyAction> => (dispatch) => {
  dispatch(request());
  client.query({
    query: PRODUCTS_BY_CATEGORY_QUERY,
    variables: {
      category: category,
    }
  }).then(result => {
    dispatch(receive(result.data.productsByCategory));
  }).catch(e => {
    window.console.warn(e.message);
  });
};

export const requestCategories = () => ({
  type: CATEGORIES_REQUEST,
});

export const receiveCategories = (items: ProductTypes.Category[]) => ({
  type: CATEGORIES_RECEIVE,
  items,
});

export const fetchCategories = (): ThunkAction<void, AppState, null, AnyAction> => (dispatch) => {
  dispatch(requestCategories());
  client.query({
    query: CATEGORIES_QUERY,
  }).then(result => {
    dispatch(receiveCategories(result.data.categories));
  }).catch(e => {
    window.console.warn(e.message);
  });
};