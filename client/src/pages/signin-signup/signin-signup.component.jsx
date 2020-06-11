import React from "react";
import './signin-signup.styles.scss'
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/sign-up.component";

function SignInSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInSignUp;
