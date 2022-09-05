import { axiosInstance } from './API';
import { ORDERS } from './constants';

async function order(data) {
  return await axiosInstance.post(ORDERS.ORDER, data);
}
export { order };
