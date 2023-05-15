import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formInit = { username: "", password: "" };
  const [formData, setFormData] = useState(formInit);

  const user = useSelector((state) => state.auth);
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

    try {
      setFormStatus("pending");
      await dispatch(loginUser(formData)).unwrap();

      setFormData(formInit);
      toast.success("loged in");
    } catch (err) {
      console.error("Failed to login user", err.message);
      toast.error(err.message);
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
