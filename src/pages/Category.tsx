import React from 'react';
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import Layout from '../views/Layout';
import Container from '@material-ui/core/Container';
import ProductList from '../containers/ProductList';
import { CategoryPageProps } from '../core/Routes';

const CheckoutPage: React.FC<RouteComponentProps<CategoryPageProps>> = ({match}) => {
  return (
    <Layout>
      <Container>
        <ProductList category={match.params.category}/>
      </Container>
    </Layout>
  );
};

export default withRouter(CheckoutPage);
