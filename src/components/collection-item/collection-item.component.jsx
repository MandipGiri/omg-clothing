import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  //actions
  const dispatch = useDispatch();
  const add = (item) => () => dispatch(addItem(item));

  //const state
  const { name, price, imageUrl } = item;
  
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <CustomButton onClick={add(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
