import AxiosClient from './API';
import { ENDPOINTS, ORDERS } from './constants';

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

async function updateUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.patch(ENDPOINTS.UPDATE_USER, data);
}

async function updatePassword(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.patch(ENDPOINTS.UPDATE_USER_PASSWORD, data);
}

async function fetchProducts({ page, limit, search }) {
  const axiosClient = new AxiosClient();

  return axiosClient.get(`/products?page=${page}&limit=${limit}&search=${search}`);
}

async function getOrders() {
  const axiosClient = new AxiosClient();
  return axiosClient.get(ORDERS.GET_ORDERS);
}

export { registerUser, loginUser, getCurrentUser, updateUser, fetchProducts, updatePassword, getOrders };
