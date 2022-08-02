import AxiosClient from "./API";
import { ENDPOINTS } from "./constants";

// async function getUsers() {
//   const axiosClient = new AxiosClient();
//   return axiosClient.get(ENDPOINTS.GET_USERS).then((res) => res.data);
// }
async function loginUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.post(ENDPOINTS.LOGIN, data);
}

export { loginUser };
