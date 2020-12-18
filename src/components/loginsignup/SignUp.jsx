import React from "react";

export default function SignUp() {
  return (
    <div className="container-xl">
      <div className="d-flex justify-content-between pt-5">
        <div className="loginSignUp-img">
          <img src="/media/login.png" alt="signup" />
        </div>
        <div className="outer-form-box">
          <form action="">
            <label className="label" htmlFor="">
              UserName
            </label>
            <input className="form-control input" type="text" />
            <label className="label" htmlFor="">
              Email
            </label>
            <input className="form-control input" type="text" />
            <label className="label" htmlFor="">
              Password
            </label>
            <input className="form-control input" type="text" />
            <button className="btn form-control btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
