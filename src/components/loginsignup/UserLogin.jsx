import Axios from "axios";
import React, { Component } from "react";
import { BASE_URL } from "../../utils/api";
import UserNavbar from "./UserNavbar";

export class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    console.log("Click is happened");
    Axios.post(`${BASE_URL}/users/login`, {
      ...this.state,
    }).then((res) => {
      localStorage.setItem("token", res.data.token);
      this.props.history.push("/");
    });
  };

  render() {
    const { email, password } = this.props;
    return (
      <div>
        <UserNavbar />
        <div className="container-xl">
          <div className="d-flex justify-content-between pt-5">
            <div className="loginSignUp-img">
              <img src="/media/login.png" alt="signup" />
            </div>
            <div className="outer-form-box">
              <label className="label" htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
              <input
                className="form-control input"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={email}
              />

              <label className="label" htmlFor="password">
                Password <span className="text-danger">*</span>
              </label>
              <input
                className="form-control input"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={password}
              />

              <button
                onClick={this.handleClick}
                className="btn form-control btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;
