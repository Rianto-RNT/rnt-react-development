import React from 'react';
import { Mutation, Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

import CartIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => (
  <Query query={GET_ITEM_COUNT}>
    {({ data: { itemCount } }) => (
      <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {(toggleCartHidden) => (
          <CartIcon
            toggleCartHidden={toggleCartHidden}
            itemCount={itemCount}
          ></CartIcon>
        )}
      </Mutation>
    )}
  </Query>
);

export default CartIconContainer;
