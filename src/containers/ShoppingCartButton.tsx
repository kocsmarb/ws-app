import React from 'react';
import { connect } from 'react-redux';
import NavLink from '../components/navigation/NavLink';
import { AppState } from '../store/reducers';
import ShoppingCartButton from '../components/header/ShoppingCartButton';

const mapStateToProps = (state: AppState) => ({
  counter: state.basket.totalQuantity,
});

const NavShoppingCartButton = (props: any) => (
  <NavLink to="/basket">
    <ShoppingCartButton {...props} />
  </NavLink>
);

export default connect(mapStateToProps, null)(NavShoppingCartButton);