import React from "react";
import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  //action
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(clearItemFromCart(cartItem));
  const increaseItemQuantity = () => dispatch(addItem(cartItem));
  const decreaseItemQuantity = () => dispatch(removeItem(cartItem));

  //state
  const { name, imageUrl, price, quantity } = cartItem;

  //UI
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItemQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={deleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
