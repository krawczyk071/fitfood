import axios from "axios";

const API_URL = "http://localhost:5000/recipes/";

// Register user
const add = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, formData, config);
  return response.data;
};

const fetch = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const recipesService = {
  add,
  fetch,
};

export default recipesService;