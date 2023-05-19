import React from "react";
import { useParams } from "react-router-dom";
import AddRecipe from "../components/AddRecipe";

const Edit = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div>{id}</div>
      <AddRecipe edit />
    </div>
  );
};

export default Edit;
