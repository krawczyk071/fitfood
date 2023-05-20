import axios from "axios";
import { baseurl } from "../../utils/helpers";

const API_URL = baseurl + "menu/";

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
const del = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const menuService = {
  add,
  fetchAll,
  del,
};

export default menuService;
