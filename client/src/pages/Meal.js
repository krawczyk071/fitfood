import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";
import axios from "axios";
import Loader from "../components/Loader";
import AddRecipe from "../components/AddRecipe";

const Meal = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [editMode, setEditMode] = useState(false);
  function toggleEdit() {
    setEditMode((prev) => !prev);
  }

  useEffect(() => {
    const fetch = async () => {
      const API_URL = "http://localhost:5000/recipes/";
      const response = await axios.get(API_URL + id);
      setRecipe(response.data);
    };
    fetch();
  }, [id, editMode]);

  if (!recipe) {
    return <Loader />;
  } else if (editMode) {
    return <AddRecipe edit={recipe} id={id} toggleEdit={toggleEdit} />;
  } else {
    return <Recipe recipe={recipe} toggleEdit={toggleEdit} />;
  }
};

export default Meal;
