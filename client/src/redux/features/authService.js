import axios from "axios";
import { baseurl } from "../../utils/helpers";

const API_URL = baseurl + "auth/";
// const [cookies, setCookies] = useCookies(["access_token"]);

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    // setCookies("access_token", user.token);
    // localStorage.setItem("userId", user.userID);
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  // setCookies("access_token", "");
  // localStorage.removeItem("userId");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
