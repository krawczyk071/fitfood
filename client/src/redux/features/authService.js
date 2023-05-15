import axios from "axios";

const API_URL = "http://localhost:5000/auth/";
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
  console.log("lout");
  // setCookies("access_token", "");
  // localStorage.removeItem("userId");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
