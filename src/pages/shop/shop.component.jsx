import React, { useEffect, useState } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import Collection from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";
import { useDispatch } from "react-redux";
import { UpdateCollection } from "../../redux/shop/shop.action";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const ShopPage = ({ match }) => {
  const [loading, setloading] = useState(true);

  const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
  const CollectionWithSpinner = WithSpinner(Collection);

  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    const unSubscribeCollectionRef = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(UpdateCollection(collectionMap));
        setloading(false);
      }
    );

    return () => unSubscribeCollectionRef();
  }, [dispatch]);

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
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
