import { combineReducers } from 'redux';
import products from './products';
import basket from './basket';

 const rootReducer = combineReducers({
  products,
  basket,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;