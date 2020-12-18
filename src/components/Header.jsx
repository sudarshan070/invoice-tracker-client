import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-bottom">
      <nav className="d-flex justify-content-between align-item-center py-3 container-xl">
        <div>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1>Logo</h1>
          </NavLink>
        </div>
        <div>
          <NavLink to="/user" className="btn btn-outline-secondary mr-2">
            User
          </NavLink>
          <NavLink to="/admin" className="btn btn-outline-secondary mr-2">
            Admin
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
