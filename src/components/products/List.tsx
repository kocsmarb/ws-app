import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styles from './List.style';
import { Product } from '../../store/schemas';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

type Style = ReturnType<typeof styles>;

type Props = WithStyles<Style> & {
  title?: string,
  items?: Product[],
  addToCart: (product: Product) => void,
};

const ProductList: React.FC<Props> = (props: Props) => {
  const { classes, items, addToCart } = props;
  console.log(items);
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      spacing={4}
      className={classes.cardGrid}
      component="section"
    >
      {
        items && items.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardHeader
                title={product.name}
                titleTypographyProps={{ variant: "h4" }}
                subheader={`${product.price} Ft`}
              />
              <CardMedia
                className={classes.media}
                image={require('../../assets/wine.jpeg')}
                title="Image Title"
              />
              <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                  aria-label="add to favorites"
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="add to basket"
                  onClick={() => addToCart(product)}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <div className={classes.info}>
                  {
                    product.spicy && <Avatar aria-label="spicy" className={classes.spicy}>S</Avatar>
                  }
                  {
                    product.vegetarian && <Avatar aria-label="vegetarian" className={classes.vegetarian}>V</Avatar>
                  }
                </div>
              </CardActions>
              {
                product.description && (
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                    </Typography>
                  </CardContent>
                )
              }
            </Card>
          </Grid>
        ))
      }
    </Grid >
  );
};

export default withStyles(styles)(ProductList);
