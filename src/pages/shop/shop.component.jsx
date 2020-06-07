import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import Collection from "../collection/collection.component";

import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";

const ShopPage = ({ match }) => {
  //state
  const { loading, isCollectionsLoaded } = useSelector(
    createStructuredSelector({
      loading: selectIsCollectionsFetching,
      isCollectionsLoaded: selectIsCollectionsLoaded,
    })
  );

  //actions
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchCollectionStartAsync()), [dispatch]);

  //UI
  const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
  const CollectionWithSpinner = WithSpinner(Collection);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
