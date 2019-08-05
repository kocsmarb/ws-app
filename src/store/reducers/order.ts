import * as actionTypes from '../actions/action-types';
import * as Types from '../schemas';

type OrderState = {
  checkoutId?: Types.Id,
  input?: Types.OrderInput,
  orderId?: Types.Id
  inProgress: boolean,
};

const initialState: OrderState = {
  inProgress: false,
};

const orderStart = (state: OrderState, { checkoutId, input }: actionTypes.OrderStartAction): OrderState => {
  return {
    ...state,
    checkoutId,
    input,
    inProgress: true,
  };
};

const orderSuccess = (state: OrderState, { checkoutId, input, orderId }: actionTypes.OrderSuccessAction): OrderState => {
  return {
    ...state,
    checkoutId,
    input,
    orderId,
    inProgress: false,
  };
};

export default function orderReducer(state = initialState, action: actionTypes.OrderActions): OrderState {
  switch (action.type) {
    case actionTypes.ORDER_START:
      return orderStart(state, action);
    case actionTypes.ORDER_SUCCESS:
      return orderSuccess(state, action);
    default:
      return state;
  }
}