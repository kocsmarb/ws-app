import gql from 'graphql-tag';

export const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION ($input: OrderInput! ){
    createOrder(
      input: $input    
    ){
      id
    }
  }
`;