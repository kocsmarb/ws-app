import * as Types from '../../schemas';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';
export const LOGOUT = 'LOGOUT';

export interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
  user: Types.User;
  token: Types.JWT;
}

export interface RegistrationSuccessAction {
  type: typeof REGISTRATION_SUCCESS;
  email: string;
}

export interface RegistrationFailAction {
  type: typeof REGISTRATION_FAIL;
  error: any;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActions = 
 | AuthSuccessAction
 | RegistrationSuccessAction
 | RegistrationFailAction
 | LogoutAction
;