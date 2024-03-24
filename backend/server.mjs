import Axios from "axios";

// Base URL for backend API
const BASE_URL = "https://dreamteam-1.onrender.com/api/";

// Axios instance with credentials enabled
const axios = Axios.create({
  withCredentials: true,
});

// HTTP service object with methods for making requests
export const httpService = {
  async get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  async post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  async put(endpoint, data) {
    return ajax(endpoint, "PUT", data);
  },
  async delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
};

// Function to make AJAX requests
async function ajax(endpoint, method = "GET", data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    });
    return res.data;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`,
      data
    );
    console.dir(err);
    if (err.response && err.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      sessionStorage.clear();
      window.location.assign("/");
      // Depending on your routing strategy, you may use:
      // window.location.assign('/#/login')
      // window.location.assign('/login')
      // router.push('/login')
    }
    throw err;
  }
}
