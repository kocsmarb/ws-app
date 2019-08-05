import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './CategoryList.style';
import { Category } from '../../store/schemas';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import NavLink from '../navigation/NavLink';

type Props = WithStyles & {
  items?: Category[],
};

const CategoryList: React.FC<Props> = (props: Props) => {
  const { classes, items } = props;
  return (
    <Grid container spacing={4} className={classes.cardGrid} >
      {
        items && items.map(category => (
          <Grid item key={category} xs={12} md={6}>
            <NavLink to={`/category/${category}`}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h2">
                      {category}
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../../assets/food1.jpeg')}
                    title="Image title"
                  />
                </Hidden>
              </Card>
            </NavLink>
          </Grid>
        ))
      }
    </Grid >
  );
};

export default withStyles(styles)(CategoryList);
