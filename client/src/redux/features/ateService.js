import axios from "axios";

const API_URL = "http://localhost:5000/ate/";

// Register user
const add = async (ateData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, ateData, config);
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

const ateService = {
  add,
  fetchAll,
};

export default ateService;
