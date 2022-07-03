import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import { store, persistor } from './redux/store';

import './index.css';
import { default as App } from './App/App.container';
import { resolvers, typeDefs } from './graphql/resolvers';
import { default as data } from './graphql/initial-data';

import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com',
  cache: new InMemoryCache(),
  resolvers,
  typeDefs,
});

client.writeData({ data }); // TODO: Fix me! ====>>>> ERROR: Uncaught TypeError: client.writeData is not a function

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

reportWebVitals();
