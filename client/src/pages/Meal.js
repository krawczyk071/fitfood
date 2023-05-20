import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";
import axios from "axios";
import Loader from "../components/Loader";
import AddRecipe from "../components/AddRecipe";
import { baseurl } from "../utils/helpers";

const Meal = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [editMode, setEditMode] = useState(false);
  function toggleEdit() {
    setEditMode((prev) => !prev);
  }

  useEffect(() => {
    const fetch = async () => {
      const API_URL = baseurl + "recipes/";
      const response = await axios.get(API_URL + id);
      setRecipe(response.data);
    };
    fetch();
  }, [id, editMode]);

  return (
    <div className="container">
      {!recipe ? (
        <Loader />
      ) : editMode ? (
        <AddRecipe edit={recipe} id={id} toggleEdit={toggleEdit} />
      ) : (
        <Recipe recipe={recipe} toggleEdit={toggleEdit} />
      )}
    </div>
  );
};

export default Meal;
