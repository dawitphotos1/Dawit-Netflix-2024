import axios from "axios";

// Create an axios instance with a base URL
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Optionally add an API key to the default headers
// Make sure to store your API key in an environment variable for security
instance.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_TMDB_API_KEY
}`;

// Request interceptor for handling errors globally
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call error:", error);
    return Promise.reject(error);
  }
);

export default instance;
