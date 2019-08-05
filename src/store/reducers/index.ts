import { combineReducers } from 'redux';
import products from './products';
import basket from './basket';
import snackbar from './snackbar';
import auth from './auth';
import order from './order';

 const rootReducer = combineReducers({
  products,
  basket,
  snackbar,
  auth,
  order,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;