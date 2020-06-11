import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import Checkout from "./pages/checkout/checkout.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.action";

const App = () => {
  //actions
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  //state
  const { currentUser } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
    })
  );

  //UI
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signin" component={SignInSignUp}>
          {currentUser ? <Redirect to="/" /> : <SignInSignUp />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
