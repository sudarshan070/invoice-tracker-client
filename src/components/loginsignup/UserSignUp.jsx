import React from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import { withRouter } from "react-router-dom";
import { BASE_URL } from "../../utils/api";

class UserSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = () => {
    axios
      .post(`${BASE_URL}/users/register`, { user: this.state })
      .then((res) => {
        console.log(res);
        this.props.history.push("/user");
      });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <>
        <UserNavbar />
        <div className="container-xl">
          <div className="d-flex justify-content-between pt-5">
            <div className="loginSignUp-img">
              <img src="/media/login.png" alt="signup" />
            </div>
            <div className="outer-form-box">
              <label className="label" htmlFor="username">
                UserName <span className="text-danger">*</span>
              </label>
              <input
                className="form-control input"
                type="text"
                name="username"
                onChange={this.handleChange}
                value={username}
              />

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
                onClick={this.handelSubmit}
                className="btn form-control btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(UserSignUp);
