import React, { useEffect, useState } from "react";
import { addUser, reset } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = ({ toggleUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);

  const [formStatus, setFormStatus] = useState("idle");
  const formInit = { username: "", password: "", password2: "" };
  const [formData, setFormData] = useState(formInit);

  useEffect(() => {
    if (user.status === "error") {
      toast.error(user.error);
    }

    if (user.status === "success" || user.data) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, navigate, dispatch]);

  function onChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!formData.password || formData.password !== formData.password2) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setFormStatus("pending");
      await dispatch(addUser(formData)).unwrap();

      setFormData(formInit);
      toast.success("user added");
    } catch (err) {
      console.error("Failed to add user", err.message);
      toast.error("Failed to add user");
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
      <p onClick={toggleUser}>Already a user - Login</p>
    </div>
  );
};

export default Signup;
