import React from "react";
import { useParams } from "react-router-dom";
import AddRecipe from "../components/AddRecipe";

const Edit = () => {
  const { id } = useParams();
  return (
    <>
      <div>{id}</div>
      <AddRecipe edit />
    </>
  );
};

export default Edit;
