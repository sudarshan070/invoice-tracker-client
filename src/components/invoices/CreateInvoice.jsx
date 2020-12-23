import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { BASE_URL } from "../../utils/api";
import UserDbNav from "./UserDbNav";

const CreateInvoice = (props) => (
  <div>
    <Formik
      initialValues={{ name: "", amount: "", date: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "Required";
        }

        if (!values.amount) {
          errors.amount = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(
            `${BASE_URL}/invoice/create`,
            { ...values },
            { headers: { authorization: localStorage.token } }
          )
          .then((res) => {
            props.history.push("/user/dashboard");
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
          <UserDbNav />
          <div className="container-xl">
            <div className="d-flex justify-content-center pt-5">
              <div className="outer-form-box">
                <form onSubmit={handleSubmit}>
                  <label className="label" htmlFor="name">
                    Invoice Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control input"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <p className="text-danger">
                    {errors.name && touched.name && errors.name}
                  </p>

                  <label className="label" htmlFor="amount">
                    Invoice Amount <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control input"
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                  />
                  <p className="text-danger">
                    {errors.amount && touched.amount && errors.amount}
                  </p>
                  <label className="label" htmlFor="date">
                    Date <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control input"
                    type="Date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  <p className="text-danger">
                    {errors.date && touched.date && errors.date}
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

export default CreateInvoice;
