import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { logoutUser } from "../redux/features/authSlice";

const LoginBtn = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  function onLogout() {
    dispatch(logoutUser());
    toast.info("loggedOUT");
    navigate("/auth");
  }
  if (user) {
    return <div onClick={onLogout}>Logout</div>;
  }
  return (
    <>
      <Link to="/auth">Login</Link>
    </>
  );
};

export default LoginBtn;
