import * as React from 'react';
import { AppState } from '../../store/reducers';
import * as actionCreators from '../../store/actions';
import * as Types from '../../store/schemas';
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from 'react-redux';

type StateToProps = {
  currentUser?: Types.User,
};

type DispatchToProps = {
  logout: () => void,
};

export type WithAuthProps = StateToProps & DispatchToProps;

export function withAuth<P extends {}>(
  WrappedComponent: React.JSXElementConstructor<P>,
) {

  type Props = Omit<P, keyof WithAuthProps>;

  class WithAuth extends React.Component {
    render() {
      return <WrappedComponent {...this.props as any} />;
    }
  }

  const mapStateToProps: MapStateToPropsParam<StateToProps, Props, AppState> = (state) => ({
    currentUser: state.auth.currentUser,
  });
  
  const mapDispatchToProps: MapDispatchToPropsFunction<DispatchToProps, Props> = (dispatch) => ({
    logout: () => dispatch(actionCreators.auth.logout()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuth) as React.ComponentClass<Props>;
}

export default withAuth;