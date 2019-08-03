import { createStyles, Theme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const style = (theme: Theme) => createStyles({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  regSucceedTitle:{
    margin: theme.spacing(3, 0, 2),
  },
  regSucceedAction:{
    width: '100%',
  },
  regSucceedAvatar: {
    margin: theme.spacing(1),
    backgroundColor: green[400],
  },
  regSucceedContent: {
    padding: theme.spacing(3),
  },
});

export type Style = ReturnType<typeof style>;