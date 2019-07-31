import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainMenu from '../components/header/MainMenuWithTransition';
import Footer from './Footer';
import { APP_TITLE } from '../config';

type Props = {
  top?: React.ReactNode | React.ReactNodeArray;
};

export const LayoutHome: React.FC<Props> = ({ top, children }) => {

  return (
    <React.Fragment>
      <CssBaseline />
      <MainMenu title={APP_TITLE} />
      <div>
        {top}
      </div>
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default LayoutHome;
