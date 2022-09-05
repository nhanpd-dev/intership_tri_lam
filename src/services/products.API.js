import { axiosInstance } from './API';
import { PRODUCTS } from './constants';

async function fetchProducts(params) {
  return await axiosInstance.get(PRODUCTS.FETCH_PRODUCTS, {
    params,
  });
}
export { fetchProducts };
