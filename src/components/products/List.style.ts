import { Theme, createStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

const styles = (theme: Theme) => createStyles({
  cardGrid: {
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  card: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  spicy: {
    backgroundColor: red[500],
  },
  vegetarian: {
    backgroundColor: green[500],
  },
  info: {
    position: 'absolute',
    right: '10px',
    bottom: '50px',
  },
  cardActions: {
    position: 'relative',
  },
});

export default styles;
