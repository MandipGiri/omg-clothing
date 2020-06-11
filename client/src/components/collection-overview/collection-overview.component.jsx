import React from "react";
import "./collection-overview.styles.scss";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = () => {
  //state
  const { collections } = useSelector(
    createStructuredSelector({
      collections: selectCollectionsForPreview,
    })
  );

  //UI
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...collectionProp }) => (
        <CollectionPreview key={id} {...collectionProp} />
      ))}
    </div>
  );
};

export default CollectionOverview;
