import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../utils/api";
import FilterDate from "../FilterDate";
import Loading from "../Loading";
import UserDbNav from "./UserDbNav";

export default function UserDashboard(props) {
  const [invoices, setInvoices] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/invoice`, {
        headers: { authorization: localStorage.token },
      })
      .then((res) => {
        const invoices = res.data.userInvoices;
        setInvoices(invoices);
      });
  }, []);

  let handleDelete = (id) => {
    axios
      .delete(`${BASE_URL}/invoice/delete/${id}`, {
        headers: { authorization: localStorage.token },
      })
      .then((res) => {
        props.history.push("/user/dashboard");
        console.log(res.data);
      });
  };

  let firstAdded = () => {
    let startDate = [...invoices].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    setInvoices(startDate);
  };

  let newAdded = () => {
    let newAdd = [...invoices].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setInvoices(newAdd);
  };

  return (
    <div>
      <UserDbNav />
      <div className="container-xl pt-3 p-0 ">
        {invoices ? (
          invoices.length === 0 ? (
            <div className="text-center user-db-create">
              <div>
                <p>You not created any Invoices</p>
                <NavLink
                  to="/user/createinvoice"
                  className="btn btn-primary user-db-btn"
                >
                  Create First Invoice
                </NavLink>
              </div>
            </div>
          ) : (
            <>
              <FilterDate firstAdded={firstAdded} newAdded={newAdded} />
              <table className="table  mt-4">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Invoices Name</th>
                    <th scope="col">Invoices Date</th>
                    <th scope="col">Invoices Amount</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>
                  </tr>
                </thead>
                {invoices.map((invoice, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td>{invoice.name}</td>
                        <td>
                          {invoice.date
                            ? invoice.date.toString().slice(0, 10)
                            : invoice.createdAt.toString().slice(0, 10)}
                        </td>
                        <td>{invoice.amount}</td>
                        <td onClick={() => handleDelete(invoice._id)}>
                          <img
                            className="delete-icon"
                            src="/media/trash.svg"
                            alt="trash"
                          />
                        </td>
                        <td className="edit-icon">
                          <NavLink to={`/invoice/update/${invoice._id}`}>
                            <img src="/media/edit.svg" alt="edit" />
                          </NavLink>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
                <tfoot>
                  <tr>
                    <td className="font-weight-bold" colSpan="2">
                      Total Amount
                    </td>
                    {invoices.length > 0 ? (
                      <td className="font-weight-bold">
                        {invoices.reduce((acc, cv) => {
                          acc = acc + Number(cv.amount);
                          return acc;
                        }, 0)}
                        /-
                      </td>
                    ) : (
                      ""
                    )}
                    <td>--</td>
                    <td>--</td>
                  </tr>
                </tfoot>
              </table>
            </>
          )
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </div>
  );
}
