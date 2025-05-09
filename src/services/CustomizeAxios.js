import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "x-api-key": "reqres-free-v1",
  },
});

// Add a request interceptor
instance.interceptors.response.use(
  function (response) {
    // Do something before request is sent
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    const res = {};
    if (error.response) {
      // Request made and server responded
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      // The request was made but no response was received
      console.log("error.request", error.request);
    } else {
      console.log("Error", error.message);
    }
    return res;
  }
);

export default instance;
