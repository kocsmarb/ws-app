import { OptionsObject } from 'notistack';

export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

export interface EnqueueSnackbarAction {
  type: typeof ENQUEUE_SNACKBAR;
  notification: {
    message: string | React.ReactNode,
    options: Exclude<OptionsObject, "key"> & { key: string | number },
  };
}

export interface CloseSnackbarAction {
  type: typeof CLOSE_SNACKBAR;
  dismissAll: boolean;
  key?: string | number;
}

export interface RemoveSnackbarAction {
  type: typeof REMOVE_SNACKBAR;
  key: string | number;
}

export type SnackbarActions = 
 | EnqueueSnackbarAction
 | CloseSnackbarAction
 | RemoveSnackbarAction
;