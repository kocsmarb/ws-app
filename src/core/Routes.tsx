import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import loadable from '@loadable/component';

const asyncHome = loadable(() => import('../pages/Home'));
const asyncCheckout = loadable(() => import('../pages/Checkout'));
const asyncCategory = loadable(() => import('../pages/Category'));

const routes = () => (
  <Switch>
    <Route path="/category/:category" exact component={asyncCategory} />
    <Route path="/checkout" exact component={asyncCheckout} />
    <Route path="/home" exact component={asyncHome} />
    <Route path="/" component={asyncHome} />
  </Switch>
);

export type CategoryPageProps = {
  category: string,
}; 

export default withRouter(routes);