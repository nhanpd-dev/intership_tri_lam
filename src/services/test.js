import AxiosClient from './API';
import { ENDPOINTS } from './constants';

async function registerUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.post(ENDPOINTS.REGISTER, data);
}

async function loginUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.post(ENDPOINTS.LOGIN, data);
}

async function getCurrentUser() {
  const axiosClient = new AxiosClient();
  return axiosClient.get(ENDPOINTS.GETME);
}

async function order(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.post(ENDPOINTS.ORDER, data);
}

export { registerUser, loginUser, getCurrentUser, order };
