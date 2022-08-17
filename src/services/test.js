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

async function updateUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.patch(ENDPOINTS.UPDATE_USER, data);
}

async function fetchProducts({ page, limit, search }) {
  const axiosClient = new AxiosClient();
  return axiosClient.get(`/products?page=${page}&limit=${limit}&search=${search}`);
}

async function getProduct({ product_id }) {
  const axiosClient = new AxiosClient();
  return axiosClient.get(`${ENDPOINTS.PRODUCT}${product_id}`);
}

export { registerUser, loginUser, getCurrentUser, updateUser, order, fetchProducts, getProduct };
