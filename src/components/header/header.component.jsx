import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.util";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const Header = () => {
  //state
  const { currentUser, hidden } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectCartHidden,
    })
  );

  //UI
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {!currentUser ? (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )}
        <CartIcon />
      </div>
      {!hidden ? <Cart /> : null}
    </div>
  );
};

export default Header;
