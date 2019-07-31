import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LogoIcon from '@material-ui/icons/BlurLinearOutlined';
import ShoppingCartButton from '../../containers/ShoppingCartButton';
import NavLink from '../navigation/NavLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginTop: theme.spacing(1),
    },
    homeNav: {
      display: 'flex',
      flexGrow: 1,
    },
  }),
);

type Props = {
  title: string,
};

const MainToolbar: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <NavLink to='/' className={classes.homeNav}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >

          <LogoIcon />

        </IconButton>
        <Typography
          variant="h6"
          className={classes.title}
        >
          {title}
        </Typography>
      </NavLink>
      <ShoppingCartButton />
    </Toolbar >
  );
};

export default MainToolbar;
