import * as Types from '../../schemas';
export const ORDER_START = 'ORDER_START';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAIL = 'ORDER_FAIL';

export interface OrderStartAction {
  type: typeof ORDER_START;
  input: Types.OrderInput;
  checkoutId: Types.Id;
}

export interface OrderSuccessAction {
  type: typeof ORDER_SUCCESS;
  input: Types.OrderInput;
  checkoutId: Types.Id;
  orderId: Types.Id;
}

export interface OrderFailAction {
  type: typeof ORDER_FAIL;
  input: Types.OrderInput;
  checkoutId: Types.Id;
  error: typeof Error;
}

export type OrderActions = 
 | OrderStartAction
 | OrderSuccessAction
 | OrderFailAction
;