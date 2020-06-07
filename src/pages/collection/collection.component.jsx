import React from "react";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";
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
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default Collection;
