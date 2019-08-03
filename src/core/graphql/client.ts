import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import store from '../../store/persistent';
import { LOCAL_USER_TOKEN } from '../../store/constants';

import { GRAPHQL_BASE_URL } from '../../config';

const httpLink = createHttpLink({
  uri: GRAPHQL_BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = store.get(LOCAL_USER_TOKEN);
  return token
    ? {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      }
    }
    : {
      headers,
    };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;