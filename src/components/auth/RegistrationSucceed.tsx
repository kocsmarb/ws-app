import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { style, Style } from './auth.style';
import NavLink from '../navigation/NavLink';

type Props = {
  email?: string,
};

const Registration: React.FC<Props & WithStyles<Style>> = ({ classes, email }) => {
  return (
    <React.Fragment>
      <Avatar className={classes.regSucceedAvatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography color="textSecondary" className={classes.regSucceedTitle}>
        Registration Succeed
        </Typography>
      <Paper className={classes.regSucceedContent}>
        <Typography component="p" variant="subtitle1">
          You can logged in with the emai: <b>{email}</b>
        </Typography>
      </Paper>
      <NavLink to="/login" className={classes.regSucceedAction}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
      </NavLink>
    </React.Fragment>
  );
};

export default withStyles(style)(Registration);
