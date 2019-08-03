import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import LogoIcon from '@material-ui/icons/BlurLinearOutlined';
import ShoppingCartButton from '../../containers/ShoppingCartButton';
import NavLink from '../navigation/NavLink';
import withAuth, { WithAuthProps } from '../../containers/hoc/withAuth';
import ProfileSubMenu from './ProfileSubMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
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
    login: {
      marginLeft: theme.spacing(2),
      color: theme.palette.primary.main,
      backgroundColor: 'white',
    }
  }),
);

type Props = {
  title: string,
};

const MainToolbar: React.FC<Props & WithAuthProps> = ({ title, currentUser, logout }) => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
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
      {
        !currentUser ? (
          <React.Fragment>
            <NavLink to='/registration'>
              <Typography
                variant="h6"
              >
                Regisztráció
              </Typography>
            </NavLink>
            <NavLink to='/login'>
              <Fab
                variant="extended"
                size="small"
                aria-label="Bejelentkezes"
                className={classes.login}
              >
                Bejelentkezés
              </Fab>
            </NavLink>
          </React.Fragment>
        )
          : (
            <React.Fragment>
              <ShoppingCartButton />
              <ProfileSubMenu 
                logout={logout}
                currentUser={currentUser}
              />
            </React.Fragment>
          )
      }
    </Toolbar >
  );
};

export default withAuth(MainToolbar);
