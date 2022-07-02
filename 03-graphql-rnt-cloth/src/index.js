import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createHttpLink } from 'apollo-link-http';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // gql,
} from '@apollo/client';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';
import { resolvers, typeDefs } from './graphql/resolvers';

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
  data: {
    cartHidden: true,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);
