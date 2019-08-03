import { OptionsObject } from 'notistack';
import * as actionTypes from "../actions/action-types/snackbar.types";

export type Notification = {
  message: string | React.ReactNode,
  key: string | number,
  options: OptionsObject,
  dismissed?: boolean,
};

type SnackbarState = {
  notifications: Notification[]
};

const initialState: SnackbarState = {
  notifications: []
};

export default (state = initialState, action: actionTypes.SnackbarActions): SnackbarState => {
  switch (action.type) {
    case actionTypes.ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            key: action.notification.options.key,
            ...action.notification
          }
        ]
      };

    case actionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          action.dismissAll || notification.options.key === action.key
            ? { ...notification, dismissed: true }
            : { ...notification }
        )
      };

    case actionTypes.REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.options.key !== action.key
        )
      };

    default:
      return state;
  }
};
