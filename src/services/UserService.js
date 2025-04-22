import axios from "./CustomizeAxios";

const fetchAllUsers = (page) => {
  return axios.get(`/api/users?page=${page}`);
};
export { fetchAllUsers };
