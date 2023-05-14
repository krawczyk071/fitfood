import React, { useState } from "react";
import { addUser } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const dispatch = useDispatch();
  const [alerts, setAlerts] = useState("");
  const formInit = { username: "", password: "", password2: "" };
  const [formData, setFormData] = useState(formInit);

  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!formData.password || formData.password !== formData.password2) {
      alert("Password dont match");
      return;
    }

    try {
      setFormStatus("pending");
      await dispatch(addUser(formData)).unwrap();

      setFormData(formInit);
      setAlerts("user added");
    } catch (err) {
      console.error("Failed to add user", err.message);
      setAlerts("Failed to add user");
    } finally {
      setFormStatus("idle");
    }
  }
  return (
    <div className="login">
      <h1 className="login__title">Signup</h1>
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
        <label htmlFor="password1" className="lbl">
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
        <label htmlFor="password2" className="lbl">
          Password confirmation
        </label>
        <input
          className="ipt"
          type="text"
          name="password2"
          id="password2"
          placeholder="password confirmation"
          value={formData.password2}
          onChange={onChange}
        />
        <button
          type="submit"
          className="btn btn--primary"
          disabled={formStatus !== "idle"}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
