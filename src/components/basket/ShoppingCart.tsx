import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Delete';
import { Id } from '../../store/schemas';
import style from './ShoppingCart.style';
import { BasketItems } from '../../store/reducers/basket';
import NavLink from '../navigation/NavLink';

type Props = WithStyles & {
  items: BasketItems,
  removeItem?: (id: Id) => void,
};

const ShoppingCart: React.FC<Props> = ({ classes, items, removeItem }) => {
  const currency = 'Ft';
  const mappedItems = Object.keys(items).map(k => items[k]);
  const totalPrice = mappedItems.reduce((sum, i) => (i.quantity * i.product.price) + sum, 0);

  return (
    <Paper className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Shopping Cart
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {mappedItems.map(item => (
            <TableRow key={item.product.id}>
              <TableCell component="th" scope="row" className={classes.row}>
                {item.product.name}
              </TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{item.quantity * item.product.price} {currency}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label={`Remove`}
                  title="Remove"
                  color="inherit"
                  onClick={() => removeItem && removeItem(item.product.id)}
                >
                  <RemoveIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        totalPrice ? (
          <div className={classes.toPayment}>
            <div>
              <Typography variant="h5">
                Total: <small>{totalPrice} {currency}</small>
              </Typography>
            </div>
            <NavLink to="/checkout">
              <Button className={classes.checkoutBtn} variant="outlined" size="large" color="primary">Checkout</Button>
            </NavLink>
          </div>
        ) : null
      }
    </Paper>
  );
};

export default withStyles(style)(ShoppingCart);
