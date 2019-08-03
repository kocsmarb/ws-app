import { AppState } from '../store/reducers';
import * as actionCreators from '../store/actions';
import Registration from '../components/auth/Registration';
import { 
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from 'react-redux';

type StateToProps = {
  registrationSucceed?: string,
};

type DispatchToProps = {
  register: (email: string, password: string) => void,
};


const mapStateToProps: MapStateToPropsParam<StateToProps, {}, AppState> = (state) => ({
  registrationSucceed: state.auth.registrationSucceed,
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchToProps, {}> = (dispatch: Function) => ({
  register: (email, password) => dispatch(actionCreators.auth.registration(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);