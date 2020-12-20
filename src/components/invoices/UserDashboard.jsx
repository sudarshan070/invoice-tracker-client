import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import Loading from "../Loading";
import UserDbNav from "./UserDbNav";

export default function UserDashboard() {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    console.log(localStorage.token);
    Axios.get(`${BASE_URL}/invoice`, {
      headers: { authorization: localStorage.token },
    }).then((res) => {
      const invoices = res.data.invoice;
      console.log(invoices);
      setInvoices(invoices);
    });
  }, []);

  return (
    <div>
      <UserDbNav />
      <div className="container-xl pt-5">
        {invoices ? (
          <table className="table ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Invoices Name</th>
                <th scope="col">Invoices Date</th>
                <th scope="col">Invoices Amount</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            {invoices.map((invoice, i) => {
              console.log(invoice);
              return (
                <tbody key={i}>
                  <tr>
                    <td>{invoice.name}</td>
                    <td>{invoice.date.toString().slice(0, 10)}</td>
                    <td>{invoice.amount}</td>
                    <td>X</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </div>
  );
}
