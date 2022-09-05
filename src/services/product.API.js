import { axiosInstance } from './API';
import { PRODUCT } from './constants';

async function getProduct(data) {
  return await axiosInstance.get(`${PRODUCT.GET_PRODUCT}?productId=${data}`);
}
export { getProduct };
