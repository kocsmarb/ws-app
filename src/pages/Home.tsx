import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/ArrowDownward';
import Layout from '../views/LayoutHome';
import InfoSection from '../components/InfoSection';
import Parallax from '../components/parallax/Parallax';
import CategoryList from '../containers/CategoryList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
      position: 'relative',
      left: '30vw',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    categoryTitle: {
      marginTop: theme.spacing(2),
      color: 'white',
      backgroundColor: theme.palette.grey[400],
      padding: theme.spacing(4),
    }
  }),
);

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Layout
      top={
        <Parallax image={require('../assets/shadow.jpg')}>
          <Fab
            variant="extended"
            size="large"
            color="secondary" 
            className={classes.fab}
          >
            <NavigationIcon className={classes.extendedIcon} />
            Are You Hungry?
          </Fab>
        </Parallax>
      }
    >
      <Container>
        <InfoSection />
        <Paper component="section" className={classes.categoryTitle}>
          <Typography variant="h4" component="h1">
            Categories
        </Typography>
          <CategoryList />
        </Paper>
      </Container>
    </Layout>
  );
};

export default HomePage;
