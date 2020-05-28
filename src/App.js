import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import { auth } from "./firebase/firebase.util";

function App() {
  const [state, setState] = useState({
    currentUser: null,
  });

  useEffect(() => {
    const firebaseAuthState = auth.onAuthStateChanged((user) =>
      setState({ ...state, currentUser: user })
    );

    return () => firebaseAuthState();
  }, []);

  return (
    <div>
      <Header currentUser={state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
