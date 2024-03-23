import Axios from "axios";

// Define the base URL
const BASE_URL = 'https://dreamteam-1.onrender.com/api/';

const axios = Axios.create({
  withCredentials: true,
});

export const httpService = {
  async get(endpoint, data) {
    // Log the full URL before making the request
    const fullURL = `${BASE_URL}${endpoint}`;
    console.log("Request URL:", fullURL);
    
    // Make the GET request using Axios
    return ajax(endpoint, "GET", data);
  },
  // Define other HTTP methods (post, put, delete) similarly...
};

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
      sessionStorage.clear();
      window.location.assign("/");
    }
    throw err;
  }
}
