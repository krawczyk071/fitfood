import React, { useEffect } from "react";
import MyMenu from "../components/MyMenu";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }

    if (user?.state === "failed") {
      console.log(user.error);
    }

    // dispatch(getGoals())

    // return () => {
    //   dispatch(reset())
    // }
  }, [user, navigate, dispatch]);

  return (
    <div className="container">
      <MyMenu />
    </div>
  );
};

export default Menu;
