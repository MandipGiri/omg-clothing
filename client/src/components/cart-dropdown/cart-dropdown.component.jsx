import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const Cart = ({ history }) => {
  //action
  const dispatch = useDispatch();
  const goToCheckout = () => {
    dispatch(toggleCartHidden());
    history.push("/checkout");
  };

  //state
  // const cartItems = useSelector(selectCartItems); --> single state
  const { cartItems } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
    })
  );

  //UI
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(Cart);
