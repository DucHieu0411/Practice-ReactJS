import axios from "./CustomizeAxios";

const fetchAllUsers = () => {
  return axios.get("/api/users?page=1");
};
export { fetchAllUsers };
