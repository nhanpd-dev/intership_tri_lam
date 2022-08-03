import AxiosClient from './API';
import { ENDPOINTS } from './constants';

async function registerUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.post(ENDPOINTS.REGISTER, data);
}

export { registerUser };
