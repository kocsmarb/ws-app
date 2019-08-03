import { AppState } from '../store/reducers';
import * as actionCreators from '../store/actions';
import Login from '../components/auth/Login';
import { BasketItems } from '../store/reducers/basket';
import { 
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from 'react-redux';

type StateToProps = {
  items?: BasketItems,
};

type DispatchToProps = {
  login: (email: string, password: string) => void,
};


const mapStateToProps: MapStateToPropsParam<StateToProps, {}, AppState> = (state) => ({
  items: state.basket.items,
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchToProps, {}> = (dispatch: Function) => ({
  login: (email, password) => dispatch(actionCreators.auth.login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);