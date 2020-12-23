import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import FilterDate from "../FilterDate";
import Loading from "../Loading";

export default function AdminDhashboard() {
  const [invoices, setInvoices] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/invoice/list`, {
        headers: { authorization: localStorage.token },
      })
      .then((res) => {
        console.log(res, "res admin");
        const invoices = res.data.invoices;
        setInvoices(invoices);
      });
  }, []);

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
    <>
      <FilterDate firstAdded={firstAdded} newAdded={newAdded} />
      <div className="container-xl pt-5">
        {invoices ? (
          invoices.length === 0 ? (
            <div className="text-center user-db-create">
              <div>
                <p>You not created any Invoices</p>
              </div>
            </div>
          ) : (
            <table className="table ">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">User Name</th>
                  <th scope="col">Invoices Name</th>
                  <th scope="col">Invoices Date</th>
                  <th scope="col">Invoices Amount</th>
                </tr>
              </thead>
              {invoices.map((invoice, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{invoice.userId.map((name) => name.username)}</td>
                      <td>{invoice.name}</td>
                      <td>
                        {invoice.date
                          ? invoice.date.toString().slice(0, 10)
                          : invoice.createdAt.toString().slice(0, 10)}
                      </td>
                      <td>{invoice.amount}</td>
                    </tr>
                  </tbody>
                );
              })}
              <tfoot>
                <tr>
                  <td className="font-weight-bold" colSpan="3">
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
                </tr>
              </tfoot>
            </table>
          )
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </>
  );
}
