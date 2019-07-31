import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainMenu from '../components/header/MainMenu';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  top: {
    paddingTop: theme.spacing(6),
  },
}));

type Props = {
  top?: React.ReactNode | React.ReactNodeArray;
};

export const Layout: React.FC<Props> = ({ top, children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <MainMenu title="Portfolio Demo" />
      <div className={classes.top}>
        {top}
      </div>
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
