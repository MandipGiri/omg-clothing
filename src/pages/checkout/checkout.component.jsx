import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

const Checkout = () => {
  //state
  const { cartItems, cartTotal } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      cartTotal: selectCartTotal,
    })
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: $ {cartTotal}</span>
      </div>
      <StripeButton price={cartTotal} />

        <div className="test-warning">
          *Please use the following test credit card for payments*
          <br/>
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
    </div>
  );
};

export default Checkout;
