import { AppState } from '../store/reducers';
import * as actionCreators from '../store/actions';
import Checkout from '../components/checkout/Checkout';
import { Id } from '../store/schemas/product';
import { BasketItems } from '../store/reducers/basket';
import { 
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from 'react-redux';

type StateToProps = {
  items: BasketItems,
};

type DispatchToProps = {
  removeItem: (id: Id) => void,
};


const mapStateToProps: MapStateToPropsParam<StateToProps, {}, AppState> = (state) => ({
  items: state.basket.items,
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchToProps, {}> = (dispatch) => ({
  removeItem: (id: Id) => dispatch(actionCreators.basket.removeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);