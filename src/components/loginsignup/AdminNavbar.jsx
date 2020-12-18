import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminNavbar() {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/admin";
  };
  return (
    <div className="navbar-link text-center container-xl">
      <NavLink
        className="link"
        activeClassName="active"
        isActive={checkActive}
        to="/admin"
      >
        Login
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/admin/register">
        SignUP
      </NavLink>
    </div>
  );
}
