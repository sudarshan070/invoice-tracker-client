import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ isLoggedIn, handleLogout }) {
  // console.log(isLoggedIn, "isloggedIn");
  return (
    <header className="border-bottom">
      <nav className="d-flex justify-content-between align-item-center py-3 container-xl">
        <div>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1>Logo</h1>
          </NavLink>
        </div>
        <div>
          {isLoggedIn ? (
            <AuthHeader handleLogout={handleLogout} />
          ) : (
            <NonAuthHeader />
          )}
        </div>
      </nav>
    </header>
  );
}

const AuthHeader = (props) => (
  <>
    <NavLink
      to="/user"
      type="button"
      onClick={props.handleLogout}
      className="btn btn-outline-danger ml-3"
    >
      Logout
    </NavLink>
  </>
);

const NonAuthHeader = () => (
  <>
    <NavLink to="/user" className="btn btn-outline-secondary mr-2">
      User
    </NavLink>
    <NavLink to="/admin" className="btn btn-outline-secondary mr-2">
      Admin
    </NavLink>
  </>
);
