import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.util";

function SignIn() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setstate({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setstate({ ...state, email: "", password: "" });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={state.email}
          required
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          value={state.password}
          handleChange={handleChange}
          required
        />
        <div className="button">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
