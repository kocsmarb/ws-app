import { combineReducers } from 'redux';
import products from './products';
import basket from './basket';
import snackbar from './snackbar';
import auth from './auth';

 const rootReducer = combineReducers({
  products,
  basket,
  snackbar,
  auth,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;