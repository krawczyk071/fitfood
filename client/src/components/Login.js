import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser } from "../redux/features/authSlice";
import { useCookies } from "react-cookie";

const Login = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const dispatch = useDispatch();
  const [alerts, setAlerts] = useState("");
  const formInit = { username: "", password: "" };
  const [formData, setFormData] = useState(formInit);
  const [, setCookies] = useCookies(["access_token"]);
  const user = useSelector(selectUser);

  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      setFormStatus("pending");
      await dispatch(loginUser(formData)).unwrap();

      setFormData(formInit);
      setAlerts("loged in");
      setCookies("access_token", user.token);
      localStorage.setItem("userId", user.userID);
      alert("login OK");
    } catch (err) {
      console.error("Failed to login user", err.message);
      setAlerts("Failed to login user");
    } finally {
      setFormStatus("idle");
    }
  }

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <div className="login__alert">Error: cant do that</div>
      <form onSubmit={onSubmit} className="login__form">
        <label htmlFor="login" className="lbl">
          Login
        </label>
        <input
          className="ipt"
          type="text"
          name="username"
          id="login"
          placeholder="login"
          value={formData.username}
          onChange={onChange}
        />
        <label htmlFor="password" className="lbl">
          Password
        </label>
        <input
          className="ipt"
          type="text"
          name="password"
          id="password"
          placeholder="password"
          value={formData.password}
          onChange={onChange}
        />
        <button
          type="submit"
          className="btn btn--primary"
          disabled={formStatus !== "idle"}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
