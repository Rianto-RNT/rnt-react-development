import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
