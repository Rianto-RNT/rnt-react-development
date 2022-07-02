import React from 'react';
import {
  Query,
  // Mutation,
  // Subscription
} from '@apollo/client/react/components';
import { gql } from '@apollo/client';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECIONS}>
    {({ loading, error, data }) => {
      console.log({ loading });
      console.log({ error });
      console.log({ data });
      if (loading) return <Spinner />;
      return <CollectionsOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
