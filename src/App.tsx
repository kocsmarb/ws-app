import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './core/Routes';
import './assets/App.css';
import store from './store/init-store';
import { SnackbarProvider } from 'notistack';
import Notifier from './containers/Notifier';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={5}>
        <Router>
          <Routes />
          <Notifier />
        </Router>
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
