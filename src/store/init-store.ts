import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = process.env.NODE_ENV === 'development'
&& typeof window === 'object'
&& (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;