import * as actionTypes from '../actions/action-types';
import * as Types from '../schemas';
import PersistentStore from '../persistent';
import { LOCAL_USER_TOKEN } from '../constants';

type AuthState = {
  currentUser?: Types.User,
  currentToken?: Types.JWT,
  registrationSucceed?: string,
};

const initialState: AuthState = {

};

export default function products(state = initialState, action: actionTypes.AuthActions): AuthState {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      PersistentStore.set(LOCAL_USER_TOKEN, action.token);
      return {
        ...state,
        currentUser: action.user,
        currentToken: action.token,
      };
    case actionTypes.LOGOUT:
      PersistentStore.remove(LOCAL_USER_TOKEN);
      return {
        ...state,
        currentUser: undefined,
        currentToken: undefined,
      };
    case actionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        registrationSucceed: action.email,
      };
    case actionTypes.REGISTRATION_FAIL:
      return {
        ...state,
        registrationSucceed: undefined,
      };
    default:
      return state;
  }
}
