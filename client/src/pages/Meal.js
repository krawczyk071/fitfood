import React from "react";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";

const Meal = () => {
  const { id } = useParams();
  return (
    <>
      <div>{id}</div>
      <Recipe />
    </>
  );
};

export default Meal;
