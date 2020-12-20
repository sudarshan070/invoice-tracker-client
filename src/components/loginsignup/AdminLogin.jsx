import React from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

class AdminLogin extends React.Component {
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

  handelSubmit = () => {
    console.log("hello");
    const userUrl = `/api/admin/login`;
    axios.post(userUrl, { user: this.state }).then((res) => console.log(res));
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <AdminNavbar />
        <div className="container-xl">
          <div className="d-flex justify-content-between pt-5">
            <div className="loginSignUp-img">
              <img src="/media/login.png" alt="signup" />
            </div>
            <div className="outer-form-box">
              <form onSubmit={this.handelSubmit}>
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

                <button type="submit" className="btn form-control btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminLogin;
