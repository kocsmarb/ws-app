import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loginByToken } from './actions/auth';
import LocalStore from './persistent';
import { LOCAL_USER_TOKEN } from './constants';

const composeEnhancers = process.env.NODE_ENV === 'development'
&& typeof window === 'object'
&& (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunk),
));

if (LocalStore.get(LOCAL_USER_TOKEN)) {
  store.dispatch<any>(loginByToken(LocalStore.get(LOCAL_USER_TOKEN)));
}

export default store;