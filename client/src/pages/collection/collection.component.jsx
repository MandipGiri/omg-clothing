import React, { useContext } from "react";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionContext from "../../context/collections/collections.context";

const Collection = ({ match }) => {
  //state
  //context api
  // const collections = useContext(CollectionContext);
  // const { title, items } = collections[match.params.collectionId];
  //from selector
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
