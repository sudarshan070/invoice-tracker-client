import Axios from "axios";
import React from "react";
import { BASE_URL } from "../../utils/api";
import UserDbNav from "./UserDbNav";

export default class CreateInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      date: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    Axios.post(
      `${BASE_URL}/invoice/create`,
      { ...this.state },
      { headers: { authorization: localStorage.token } }
    ).then((res) => {
      console.log(res);
      this.props.history.push("/user/dashboard");
    });
  };

  render() {
    const { name, amount, date } = this.props;
    return (
      <div>
        <UserDbNav />
        <div className="pt-5 container-xl">
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <input
            type="number"
            name="amount"
            onChange={this.handleChange}
            value={amount}
          />
          <input
            type="Date"
            name="date"
            onChange={this.handleChange}
            value={date}
          />
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}
