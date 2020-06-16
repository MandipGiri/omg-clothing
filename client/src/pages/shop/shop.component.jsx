import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  fetchCollectionStart,
} from "../../redux/shop/shop.action";

import CollectionOverViewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../collection/collection.container";

const ShopPage = ({ match }) => {
  //actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  //UI
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverViewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

export default ShopPage;
