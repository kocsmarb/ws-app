import * as React from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

import loadable from '@loadable/component';

import withAuth, { WithAuthProps } from '../containers/hoc/withAuth';

const asyncHome = loadable(() => import('../pages/Home'));
const asyncCheckout = loadable(() => import('../pages/Checkout'));
const asyncCategory = loadable(() => import('../pages/Category'));
const AsyncLogin = loadable(() => import('../pages/Login'));
const asyncRegistration = loadable(() => import('../pages/Registration'));

class Routes extends React.Component<RouteComponentProps & WithAuthProps> {
  render() {
    return (
      <Switch>
        <Route path="/category/:category" exact component={asyncCategory} />
        <Route path="/checkout" exact component={asyncCheckout} />
        <Route
          path="/login"
          exact
          render={() => this.props.currentUser ? <Redirect to="/" /> : <AsyncLogin />}
        />
        <Route path="/registration" exact component={asyncRegistration} />
        <Route path="/home" exact component={asyncHome} />
        <Route path="/" component={asyncHome} />
      </Switch>
    );
  }
}

export type CategoryPageProps = {
  category: string,
};

export default withAuth(withRouter(Routes));