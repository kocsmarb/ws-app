import gql from 'graphql-tag';

export const ME_QUERY = gql`
  query ME_QUERY {
    me {
      id
      email
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation REGISTER_MUTATION ($email: String!, $password: String! ){
    register(
        email: $email
        password: $password       
      ){
        id
        email
      }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION ($email: String!, $password: String! ){
    login(
      email: $email
      password: $password       
    ){
      token
      user {
        id
        email
      }
    }
  }
`;