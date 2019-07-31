import { Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

const styles: Styles<Theme, object> = (theme: Theme) => ({
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  cardGrid: {
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
});

export default styles;
