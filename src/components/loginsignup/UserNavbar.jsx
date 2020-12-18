import React from "react";
import { NavLink } from "react-router-dom";

export default function UserNavbar() {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/user";
  };
  return (
    <div className="navbar-link text-center container-xl">
      <NavLink
        className="link"
        activeClassName="active"
        isActive={checkActive}
        to="/user"
      >
        Login
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/user/register">
        SignUP
      </NavLink>
    </div>
  );
}
