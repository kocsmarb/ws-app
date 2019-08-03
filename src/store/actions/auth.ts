import { AnyAction, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import * as actionTypes from './action-types';
import * as Types from '../schemas';
import client from '../../core/graphql/client';
import { enqueueSnackbar } from './snackbar';
import { REGISTER_MUTATION, LOGIN_MUTATION, ME_QUERY } from '../../core/graphql/operations/user';

export const authStart = (email: string, password: string) => ({
  type: actionTypes.AUTH_START,
  email,
  password,
});

export const authSuccess = (user: Types.User, token: Types.JWT): actionTypes.AuthSuccessAction => ({
  type: actionTypes.AUTH_SUCCESS,
  user,
  token,
});

export const authFail = (error: any) => ({
  type: actionTypes.AUTH_FAIL,
  error,
});

export const registrationStart = (email: string, password: string) => ({
  type: actionTypes.REGISTRATION_START,
  email,
  password,
});

export const registrationSuccess = (email: string) => ({
  type: actionTypes.REGISTRATION_SUCCESS,
  email,
});

export const registrationFail = (error: any) => ({
  type: actionTypes.REGISTRATION_FAIL,
  error,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});


export const login = (email: string, password: string): ThunkAction<void, AppState, null, AnyAction> => (dispatch) => {
  dispatch(authStart(email, password));
  console.log(email, password);
  
  client.mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      email,
      password,
    },
  }).then(result => {
    console.log(result);
    dispatch(authSuccess(result.data.login.user, result.data.login.token));
    console.log('Auth succeed!');
  }).catch(e => {
    console.log(e.message);
    dispatch(enqueueSnackbar(e.message, {variant: 'error'}));
    dispatch(authFail(e));
  });
};

export const registration = (email: string, password: string): ThunkAction<void, AppState, null, AnyAction> => (dispatch) => {
  dispatch(registrationStart(email, password));
  client.mutate({
    mutation: REGISTER_MUTATION,
    variables: {
      email,
      password,
    },
  }).then(result => {
    dispatch(registrationSuccess(result.data.register.email));
  }).catch(e => {
    dispatch(enqueueSnackbar(e.message, {variant: 'error'}));
    dispatch(registrationFail(e));
  });
};

export const loginByToken: ActionCreator<ThunkAction<void, AppState, null, AnyAction>> = (token: string)  => 
(dispatch) => {
  console.log('Try Login', token);

  client.query({
    query: ME_QUERY,
  }).then(result => {
    console.log(result.data.me, token);
    
    dispatch(authSuccess(result.data.me, token));
  }).catch(e => {
    window.console.warn(e.message);
    //dispatch(logout());
  });
};
