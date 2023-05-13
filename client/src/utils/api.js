import axios from "axios";

const url = "http://localhost:5000/recipes";

export const fetchRecipes = () => axios.get(url);
export const createRecpie = (newRecpie) => axios.post(url, newRecpie);
// export const likeRecpie = (id) => axios.patch(`${url}/${id}/likeRecpie`);
export const updateRecpie = (id, updatedRecpie) =>
  axios.patch(`${url}/${id}`, updatedRecpie);
export const deleteRecpie = (id) => axios.delete(`${url}/${id}`);
