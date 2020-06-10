import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";

function SignUp() {
  //state
  const [state, setstate] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //actions
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setstate({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    dispatch(signUpStart({ email, password, displayName }));

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfileDocument(user, { displayName });
    //   setstate({
    //     ...state,
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    // } catch (error) {
    //   console.log("error registering user ", error);
    //   alert(error.message);
    // }
  };

  //UI
  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className={"sign-up-form"} onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Display Name"
          value={state.displayName}
          required
          handleChange={handleChange}
        />

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

        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          required
          value={state.confirmPassword}
          handleChange={handleChange}
        />
        <div className="button">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
