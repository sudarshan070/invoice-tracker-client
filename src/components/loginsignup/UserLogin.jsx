import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { withRouter } from "react-router-dom";
import { BASE_URL } from "../../utils/api";
import UserNavbar from "./UserNavbar";

const UserLogin = (props) => (
  <div>
    <Formik
      initialValues={{ email: "", password: "", isAdmin: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        const passwordRegex = /(?=.*[0-9])/;
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 8 characters long.";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = "Invalid password. Must contain one number.";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(`${BASE_URL}/users/login`, {
            ...values,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.isAdmin) {
              localStorage.setItem("token", res.data.token);
              props.setIsLoggedIn(true);
              props.history.push("/admin/dashboard");
            } else {
              localStorage.setItem("token", res.data.token);
              props.setIsLoggedIn(true);
              props.history.push("/user/dashboard");
            }
          })
          .catch((error) => console.log(error));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <UserNavbar />
          <div className="container-xl">
            <div className="d-flex justify-content-between pt-5">
              <div className="loginSignUp-img d-media-none">
                <img src="/media/login.png" alt="signup" />
              </div>
              <div className="outer-form-box shadow ">
                <form onSubmit={handleSubmit} className="login-form">
                  <label className="label" htmlFor="email">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control input"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p className="text-danger">
                    {errors.email && touched.email && errors.email}
                  </p>

                  <label className="label" htmlFor="password">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control input"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <p className="text-danger">
                    {errors.password && touched.password && errors.password}
                  </p>

                  <button
                    className="btn form-control btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </Formik>
  </div>
);

export default withRouter(UserLogin);
