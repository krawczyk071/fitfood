import axios from "axios";
import { baseurl } from "../../utils/helpers";

const API_URL = baseurl + "ate/";

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

const del = async (ateId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + ateId, config);
  return response.data;
};

const ateService = {
  add,
  fetchAll,
  del,
};

export default ateService;
