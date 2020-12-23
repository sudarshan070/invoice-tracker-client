import React from "react";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="container-xl">
        <div className="d-flex justify-content-between media-flex">
          <div>
            <h2>Invoice Tracker</h2>
            <h4>Monitor your accounts receivable with this invoice tracker.</h4>
            <h3>
              👉🏻 Here are some of the cool things about this invoice tracking.
            </h3>
            <p>It shows an aging summary for all invoices for a single User.</p>
            <p> Admin shows an aging summary for all invoices. </p>
          </div>
          <div className="landing-img-left">
            <img src="/media/invoice.png" alt="invoice" />
          </div>
        </div>

        <div className="d-flex align-items-center pt-4">
          <div className="landing-img-right pr-5 d-media-none">
            <img src="/media/invoice1.png" alt="invoice1" />
          </div>
          <div className="landing-left pl-5">
            <h2>Make your accounts with Invoice Tracker</h2>
            <p>Easily track all your invoices in one place</p>
            <NavLink to="/user" className="btn btn-primary start-btn my-4">
              Start
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
