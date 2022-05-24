import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../utils/firebase.utils";

import { ReactComponent as Logo } from "../../assets/images/svg/crown.svg";

import "../../assets/scss/header.style.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="shop">
        SHOP
      </Link>
      <Link className="option" to="shop">
        CONTACT
      </Link>
      <>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </>
    </div>
  </div>
);

export default Header;
