import React from "react";

const Signup = () => {
  return (
    <div className="login">
      <h1 className="login__title">Signup</h1>
      <form action="" className="login__form">
        <label htmlFor="login" className="lbl">
          Login
        </label>
        <input
          className="ipt"
          type="text"
          name=""
          id="login"
          placeholder="login"
        />
        <label htmlFor="password1" className="lbl">
          Password
        </label>
        <input
          className="ipt"
          type="text"
          name=""
          id="password1"
          placeholder="password1"
        />
        <label htmlFor="password2" className="lbl">
          Password confirmation
        </label>
        <input
          className="ipt"
          type="text"
          name=""
          id="password2"
          placeholder="password confirmation"
        />
        <button type="submit" className="btn btn--primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
