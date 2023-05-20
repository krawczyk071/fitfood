import axios from "axios";
import { baseurl } from "../../utils/helpers";

const API_URL = baseurl + "recipes/";

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

const editOne = async (formData, id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + id, formData, config);
  return response.data;
};
const delOne = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const fetch = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const recipesService = {
  add,
  fetch,
  editOne,
  delOne,
};

export default recipesService;
