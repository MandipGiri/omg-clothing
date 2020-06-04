import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GqHb8AXXFEf30F2zfsz8RRt81AabA3pZXeuN4Cn26ANw9GMnTol1Vkoj6iA88InAIsjLWASbZYziWm7uEQvDEqy00ZtqLeftr";

  const onToken = (token) => {
    alert("Payment Successful");
    console.log("token", token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="OMG Clothing Mandip.Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
