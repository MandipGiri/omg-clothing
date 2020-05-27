import React from "react";
import { Collections } from "../../utilites/constants/CollectionItemsConstant";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
const ShopPage = () => {
  return (
    <div className="shop-page">
      {Collections.map(({ id, ...collectionProp }) => (
        <CollectionPreview key={id} {...collectionProp} />
      ))}
    </div>
  );
};

export default ShopPage;
