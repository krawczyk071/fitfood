import React, { useEffect } from "react";
import MyMenu from "../components/MyMenu";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }

    if (user?.state === "error") {
      console.log(user.error);
    }

    // dispatch(getGoals())

    // return () => {
    //   dispatch(reset())
    // }
  }, [user, navigate, dispatch]);

  return (
    <>
      <MyMenu />
    </>
  );
};

export default Menu;
