import React from "react";

export default function FilterDate({ firstAdded, newAdded }) {
  return (
    <div className="container-xl pt-4 d-flex justify-content-center">
      <small className="pr-3 p-0">Filter By</small>
      <div
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Basic example"
      >
        <button
          onClick={() => firstAdded()}
          type="button"
          className="btn btn-secondary"
        >
          First Added Invoices
        </button>
        <button
          onClick={() => newAdded()}
          type="button"
          className="btn btn-secondary"
        >
          New Added Invoices
        </button>
      </div>
    </div>
  );
}
