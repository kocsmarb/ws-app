import React from 'react';
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import Layout from '../views/Layout';
import Container from '@material-ui/core/Container';
import ShoppingCart from '../containers/ShoppingCart';
import { CategoryPageProps } from '../core/Routes';

const CheckoutPage: React.FC<RouteComponentProps<CategoryPageProps>> = () => {
  return (
    <Layout>
      <Container>
        <ShoppingCart />
      </Container>
    </Layout>
  );
};

export default withRouter(CheckoutPage);
