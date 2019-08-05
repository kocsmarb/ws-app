import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import * as actionTypes from './action-types/order.types';
import * as Types from '../schemas';
import client from '../../core/graphql/client';
import { enqueueSnackbar } from './snackbar';
import { CREATE_ORDER_MUTATION } from '../../core/graphql/operations/order';
import { reset } from './basket';

export const orderStart = (checkoutId: Types.Id, input: Types.OrderInput): actionTypes.OrderStartAction => ({
  type: actionTypes.ORDER_START,
  checkoutId,
  input,
});

export const orderSuccess = (checkoutId: Types.Id, input: Types.OrderInput, orderId: Types.Id): actionTypes.OrderSuccessAction => ({
  type: actionTypes.ORDER_SUCCESS,
  checkoutId,
  input,
  orderId,
});

export const orderFail = (checkoutId: Types.Id, input: Types.OrderInput, error: typeof Error): actionTypes.OrderFailAction => ({
  type: actionTypes.ORDER_FAIL,
  checkoutId,
  input,
  error,
});

export const createOrder = (checkoutId: Types.Id, input: Types.OrderInput): ThunkAction<void, AppState, null, AnyAction> => (dispatch) => {
  dispatch(orderStart(checkoutId, input));
  client.mutate({
    mutation: CREATE_ORDER_MUTATION,
    variables: {
      input,
    },
  }).then(result => {
    dispatch(orderSuccess(checkoutId, input, result.data.createOrder.id));
    dispatch(reset());
  }).catch(e => {
    dispatch(enqueueSnackbar(e.message, { variant: 'error' }));
    dispatch(orderFail(checkoutId, input, e));
  });
};
