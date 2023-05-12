import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <div className="login__alert">Error: cant do that</div>
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
        <label htmlFor="password" className="lbl">
          Password
        </label>
        <input
          className="ipt"
          type="text"
          name=""
          id="password"
          placeholder="password"
        />
        <button type="submit" className="btn btn--primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
