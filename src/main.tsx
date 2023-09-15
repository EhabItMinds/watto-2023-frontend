import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';

import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:4000/graphql',
    connectionParams: {
      authToken: localStorage.getItem('token'),
    },
  }),
);

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
