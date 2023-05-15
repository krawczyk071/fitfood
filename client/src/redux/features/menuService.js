import axios from "axios";

const API_URL = "http://localhost:5000/menu/";

// Register user
const add = async (recipeId) => {
  const response = await axios.post(API_URL, recipeId);

  return response.data;
};

const menuService = {
  add,
};

export default menuService;
