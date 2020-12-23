import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../utils/api";

export default class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      invoiceDetail: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    if (this.state.invoiceDetail) {
      var invoiceDetail = this.state.invoiceDetail;
      invoiceDetail[name] = value;
      this.setState({ invoiceDetail });
    }
  };

  handleClick = () => {
    axios
      .put(
        `${BASE_URL}/invoice/update/${this.state.id}`,
        { ...this.state.invoiceDetail },
        {
          headers: { authorization: localStorage.token },
        }
      )
      .then((res) => {
        this.props.history.push("/user/dashboard");
      });
  };

  componentDidMount() {
    axios
      .get(
        `${BASE_URL}/invoice/${this.state.id}`,

        {
          headers: { authorization: localStorage.token },
        }
      )
      .then((res) => {
        const invoice = res.data.getInvoice;
        this.setState({ invoiceDetail: invoice });
      });
  }

  render() {
    const { name, amount, date } = this.state.invoiceDetail;
    return (
      <div className="container-xl">
        <div className="d-flex justify-content-center pt-5">
          <div className="outer-form-box shadow ">
            <div className="py-2 text-center">
              <h2>Invoice Update form</h2>
            </div>

            <label className="label" htmlFor="name">
              Invoice Name
            </label>
            <input
              className="form-control input update-input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <label className="label" htmlFor="amount">
              Invoice Amount
            </label>
            <input
              className="form-control input update-input"
              type="number"
              name="amount"
              value={amount}
              onChange={this.handleChange}
            />
            <label className="label" htmlFor="date">
              Invoice Date
            </label>
            <input
              className="form-control input update-input"
              type="date"
              name="date"
              value={date}
              onChange={this.handleChange}
            />
            <button
              className="btn form-control btn-primary"
              type="submit"
              onClick={this.handleClick}
            >
              Submit
            </button>
            <div className="text-center">
              <NavLink
                style={{ textDecoration: "none" }}
                to="/user/dashboard"
                className="btn-cancel"
              >
                Cancel
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
