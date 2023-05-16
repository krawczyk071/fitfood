import axios from "axios";

const API_URL = "http://localhost:5000/menu/";

// Register user
const add = async (recipeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, { recipeId }, config);
  return response.data;
};
const fetchAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const menuService = {
  add,
  fetchAll,
};

export default menuService;
