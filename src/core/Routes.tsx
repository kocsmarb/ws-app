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

const AsyncHome = loadable(() => import('../pages/Home'));
const AsyncShoppingCart = loadable(() => import('../pages/ShoppingCart'));
const AsyncCheckout = loadable(() => import('../pages/Checkout'));
const AsyncCategory = loadable(() => import('../pages/Category'));
const AsyncLogin = loadable(() => import('../pages/Login'));
const AsyncRegistration = loadable(() => import('../pages/Registration'));

class Routes extends React.Component<RouteComponentProps & WithAuthProps> {
  render() {
    const { currentUser } = this.props;
    return (
      <Switch>
        <Route path="/category/:category" exact component={AsyncCategory} />
        <Route path="/basket" exact render={() => !currentUser ? <Redirect to="/" /> : <AsyncShoppingCart />}  />
        <Route path="/checkout" exact render={() => !currentUser ? <Redirect to="/" /> : <AsyncCheckout />} />
        <Route path="/login" exact render={() => currentUser ? <Redirect to="/" /> : <AsyncLogin />} />
        <Route path="/registration" exact component={AsyncRegistration} />
        <Route path="/home" exact component={AsyncHome} />
        <Route path="/" component={AsyncHome} />
      </Switch>
    );
  }
}

export type CategoryPageProps = {
  category: string,
};

export default withAuth(withRouter(Routes));