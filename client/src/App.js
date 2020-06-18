import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.action";
import { GlobalStyles } from "./global.styles";
import Header from "./components/header/header.component";
import CurrentUserContext from "./context/current-user/current-user.context";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInSignUp = lazy(() =>
  import("./pages/signin-signup/signin-signup.component")
);
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));

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
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/signin" component={SignInSignUp}>
              {currentUser ? <Redirect to="/" /> : <SignInSignUp />}
            </Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
