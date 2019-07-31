import gql from 'graphql-tag';

export const Product = gql`
    fragment Product on Product{
      id
      name
      category
      description
      price
      spicy
      vegetarian
    }
`;

export const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY{
    products {
      ...Product
    }
  }
  ${Product}
`;

export const PRODUCTS_BY_CATEGORY_QUERY = gql`
  query PRODUCTS_BY_CATEGORY_QUERY ($category: String!){
    productsByCategory(category: $category) {
      ...Product
    }
  }
  ${Product}
`;