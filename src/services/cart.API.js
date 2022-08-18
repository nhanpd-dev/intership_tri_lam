import AxiosClient from './API';
import { ORDERS } from './constants';

async function order(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.post(ORDERS.ORDER, data);
}

async function fetchProducts({ page, limit, search }) {
  const axiosClient = new AxiosClient();

  return axiosClient.get(`/products?page=${page}&limit=${limit}&search=${search}`);
}

export { order, fetchProducts };
