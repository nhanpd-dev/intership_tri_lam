import AxiosClient from './API';

import { PRODUCT } from './constants';

async function getProduct(data) {
  const axiosClient = new AxiosClient();

  return axiosClient.get(`${PRODUCT.GET_PRODUCT}?productId=${data}`);
}

export { getProduct };
