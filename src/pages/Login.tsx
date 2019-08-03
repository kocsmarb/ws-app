import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../views/Layout';
import Container from '@material-ui/core/Container';
import Login from '../containers/Login';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Login />
      </Container>
    </Layout>
  );
};

export default withRouter(LoginPage);
