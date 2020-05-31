import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

const App = () => {
  //actions
  const dispatch = useDispatch();

  useEffect(() => {
    const firebaseAuthState = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
    });

    return () => firebaseAuthState();
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
        <Route exact path="/signin" component={SignInSignUp}>
          {currentUser ? <Redirect to="/" /> : <SignInSignUp />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
