/**
 * Based on: https://iamhosseindhv.com/notistack/demos#redux-/-mobx-example
 */

import * as React from 'react';
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from 'react-redux';
import { AppState } from '../store/reducers';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { removeSnackbar } from '../store/actions/snackbar';
import { Notification } from '../store/reducers/snackbar';

type StateToProps = {
  notifications: Notification[],
};

type DispatchToProps = {
  removeSnackbar: (key: string | number) => void,
};

class Notifier extends React.Component<StateToProps & DispatchToProps & WithSnackbarProps> {
  displayed: (string | number | undefined)[] = [];

  storeDisplayed = (id?: string | number) => {
    this.displayed = [...this.displayed, id];
  };

  shouldComponentUpdate(nextProps: StateToProps & DispatchToProps & WithSnackbarProps) {
    const { notifications: newSnacks = [] } = nextProps;
    if (!newSnacks.length) {
      this.displayed = [];
      return false;
    }

    const { notifications: currentSnacks } = this.props;
    let notExists = false;
    for (let i = 0; i < newSnacks.length; i += 1) {
      const newSnack = newSnacks[i];
      if (newSnack.dismissed) {
        this.props.closeSnackbar(newSnack.key);
        this.props.removeSnackbar(newSnack.key);
      }

      if (notExists) continue;
      notExists = notExists || !currentSnacks.filter(({ options: key }) => newSnack.key === key).length;
    }
    return notExists;
  }

  componentDidUpdate() {
    const { notifications = [] } = this.props;

    notifications.forEach(({ message, key, options = {} }) => {
      // Do nothing if snackbar is already displayed
      if (this.displayed.includes(key)) return;
      // Display snackbar using notistack
      this.props.enqueueSnackbar(message, {
        ...options,
        onClose: () => {
          // Dispatch action to remove snackbar from redux store
          this.props.removeSnackbar(key);
        }
      });
      // Keep track of snackbars that we've displayed
      this.storeDisplayed(key);
    });
  }

  render() {
    return null;
  }
}

const mapStateToProps: MapStateToPropsParam<StateToProps, {}, AppState> = (state) => ({
  notifications: state.snackbar.notifications,
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchToProps, {}> = (dispatch: Function) => ({
  removeSnackbar: (key) => dispatch(removeSnackbar(key)),
});

export default withSnackbar(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifier));
