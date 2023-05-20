import axios from "axios";
import { baseurl } from "./helpers";

const url = baseurl + "recipes";

export const fetchRecipes = () => axios.get(url);
export const createRecipe = (newRecipe) => axios.post(url, newRecipe);
// export const likeRecipe = (id) => axios.patch(`${url}/${id}/likeRecipe`);
export const updateRecipe = (id, updatedRecipe) =>
  axios.patch(`${url}/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${url}/${id}`);
