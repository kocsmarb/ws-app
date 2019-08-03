import { OptionsObject } from 'notistack';
import * as actionTypes from './action-types/snackbar.types';

export const enqueueSnackbar = (message: string | React.ReactNode, options?: OptionsObject): actionTypes.EnqueueSnackbarAction => ({
  type: actionTypes.ENQUEUE_SNACKBAR,
  notification: {
    message,
    options: {
      ...options,
      key: options && options.key ? options.key : new Date().getTime() + Math.random(),
    },
  }
});

export const closeSnackbar = (key?: string | number): actionTypes.CloseSnackbarAction => ({
  type: actionTypes.CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const removeSnackbar = (key: string | number): actionTypes.RemoveSnackbarAction => ({
  type: actionTypes.REMOVE_SNACKBAR,
  key,
});
