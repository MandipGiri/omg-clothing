import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.action";

import Spinner from "../../components/spinner/spinner.component";

const CollectionOverViewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const CollectionContainer = lazy(() =>
  import("../collection/collection.container")
);

const ShopPage = ({ match }) => {
  //actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  //UI
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
