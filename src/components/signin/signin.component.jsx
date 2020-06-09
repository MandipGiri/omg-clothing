import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

function SignIn() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setstate({ ...state, [name]: value });
  };

  //actions
  const dispatch = useDispatch();
  const googleSignIn = () => dispatch(googleSignInStart());

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;
    dispatch(emailSignInStart({ email, password }));
  };

  //UI
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          required
          value={state.email}
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          required
          value={state.password}
          handleChange={handleChange}
        />
        <div className="button">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={googleSignIn}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
