import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../store/reducers';
import * as actionCreators from '../store/actions';
import Checkout from '../components/checkout/Checkout';
import { Id, OrderInput, User } from '../store/schemas';
import { BasketItems } from '../store/reducers/basket';

type StateToProps = {
  items: BasketItems,
  orderId?: Id,
  currentUser?: User,
  inProgress: boolean,
};

type DispatchToProps = {
  createOrder: (checkoutId: Id, input: OrderInput) => void,
};


const mapStateToProps: MapStateToPropsParam<StateToProps, {}, AppState> = (state) => ({
  currentUser: state.auth.currentUser,
  items: state.basket.items,
  orderId: state.order.orderId,
  inProgress: state.order.inProgress,
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchToProps, {}> = (dispatch: ThunkDispatch<AppState, null, AnyAction>) => ({
  createOrder: (checkoutId: Id, input: OrderInput) => dispatch(actionCreators.order.createOrder(checkoutId, input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);