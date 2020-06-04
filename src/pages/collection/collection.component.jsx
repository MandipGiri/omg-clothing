import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const Collection = ({ match }) => {
  //state
  const {
    collection: { title, items },
  } = useSelector(
    createStructuredSelector({
      collection: selectCollection(match.params.collectionId),
    })
  );

  //UI
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
