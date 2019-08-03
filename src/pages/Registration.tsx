import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../views/Layout';
import Container from '@material-ui/core/Container';
import Registration from '../containers/Registration';

const RegistrationPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Registration />
      </Container>
    </Layout>
  );
};

export default withRouter(RegistrationPage);
