import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from './AppBarWithTransition';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

type Props = {
  title: string,
};

const MainMenuWithTransition: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar title={title} />
      </AppBar>
    </div>
  );
};

export default MainMenuWithTransition;
