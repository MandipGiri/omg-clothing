import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.action";

const Header = () => {
  //action
  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutStart());

  //state
  const { currentUser, hidden } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectCartHidden,
    })
  );

  //UI
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {!currentUser ? (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        ) : (
          <OptionLink as="div" onClick={signOut}>
            SIGN OUT
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden ? <Cart /> : null}
    </HeaderContainer>
  );
};

export default Header;
