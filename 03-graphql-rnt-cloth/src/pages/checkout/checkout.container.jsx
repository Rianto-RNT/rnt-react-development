import React from 'react';
import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = () => (
  <Query query={GET_CART_ITEMS_AND_TOTAL}>
    {({ data: { cartItems, cartTotal } }) => (
      <CheckoutPage cartItems={cartItems} total={cartTotal} />
    )}
  </Query>
);

export default CheckoutPageContainer;
