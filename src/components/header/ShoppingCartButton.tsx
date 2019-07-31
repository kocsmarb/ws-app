import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ShoppingCartButton: React.FC<{counter: number}> = ({counter}) => {
  return (
    <IconButton aria-label={`${counter} items are added to the shopping cart.`} color="inherit">
      <Badge badgeContent={counter} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default ShoppingCartButton;
