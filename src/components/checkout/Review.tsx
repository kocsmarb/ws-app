import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import style from '../basket/ShoppingCart.style';
import { BasketItems } from '../../store/reducers/basket';
import { Values } from './Checkout';

type Props = WithStyles & {
  items: BasketItems,
  values: Values,
};

const Review: React.FC<Props> = ({ classes, items, values }) => {
  const currency = 'Ft';
  const mappedItems = Object.keys(items).map(k => items[k]);
  const totalPrice = mappedItems.reduce((sum, i) => (i.quantity * i.product.price) + sum, 0);

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography variant="h5" className={classes.title}>
          Order summary
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
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

            </div>
          ) : null
        }
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="h5" className={classes.title}>
          Shipping
        </Typography>
        <Typography component="p">
          {`${values.firstName} ${values.lastName}`}
        </Typography>
        <Typography component="p">
          {values.address}
        </Typography>
        <Typography component="p">
          +36 {values.phone}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(style)(Review);
