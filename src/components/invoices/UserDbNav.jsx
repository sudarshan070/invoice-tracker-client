import React from "react";
import { NavLink } from "react-router-dom";

export default function UserDbNav() {
  return (
    <div className="navbar-link text-center container-xl">
      <NavLink className="link" activeClassName="active" to="/user/dashboard">
        Invoices List
      </NavLink>
      <NavLink
        className="link"
        activeClassName="active"
        to="/user/createinvoice"
      >
        Create New Invoices
      </NavLink>
    </div>
  );
}
