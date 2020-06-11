import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GqHb8AXXFEf30F2zfsz8RRt81AabA3pZXeuN4Cn26ANw9GMnTol1Vkoj6iA88InAIsjLWASbZYziWm7uEQvDEqy00ZtqLeftr";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => alert("Payment Successful"))
      .catch((err) => {
        console.log("err", err);
        alert(
          "There was an issue with your credit card. Please make sure you use the provided credit card."
        );
      });
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
