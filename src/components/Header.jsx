import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ isLoggedIn, handleLogout, userInfo }) {
  return (
    <header className="border-bottom">
      <nav className=" py-3 container-xl">
        <div>
          {isLoggedIn ? (
            <AuthHeader handleLogout={handleLogout} userInfo={userInfo} />
          ) : (
            <NonAuthHeader />
          )}
        </div>
      </nav>
    </header>
  );
}

const AuthHeader = (props) => (
  <div className="d-flex justify-content-between align-item-center">
    <div className="logo">
      <img src="/media/logo.png" alt="logo" />
    </div>
    <div className="d-flex align-items-center">
      <p>{props.userInfo ? props.userInfo.username : ""}</p>
      <NavLink
        to="/"
        type="button"
        onClick={props.handleLogout}
        className="btn btn-outline-danger ml-3"
      >
        Logout
      </NavLink>
    </div>
  </div>
);

const NonAuthHeader = () => (
  <div className="d-flex justify-content-between align-item-center">
    <NavLink to="/" className="logo">
      <img src="/media/logo.png" alt="logo" />
    </NavLink>
    <div>
      <NavLink to="/user" className="btn btn-outline-secondary mr-2">
        SignUp/Login
      </NavLink>
    </div>
  </div>
);
