import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AuthRequired() {
  const { data: user } = useSelector((state) => state.auth);

  if (!user) {
    toast.info("Need to login to access this page");
    return <Navigate to="/auth" />;
  }
  return <Outlet />;
}
