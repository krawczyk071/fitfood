import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipes } from "../redux/features/recipesSlice";

const Test = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  console.log("t", recipes);
  return <div>TEST</div>;
};

export default Test;
