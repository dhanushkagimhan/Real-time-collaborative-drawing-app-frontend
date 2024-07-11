import axios from "axios";

const userClient = axios.create({
  baseURL: import.meta.env.VITE_BASEURL + "/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
});

export { userClient };
