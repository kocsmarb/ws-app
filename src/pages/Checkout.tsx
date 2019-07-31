import React from 'react';
import Layout from '../views/Layout';
import Container from '@material-ui/core/Container';
import Checkout from '../containers/Checkout';

const CheckoutPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Checkout />
      </Container>
    </Layout>
  );
};

export default CheckoutPage;
