import AxiosClient from './API';
import { USER } from './constants';

async function registerUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.post(USER.REGISTER, data);
}

async function loginUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.post(USER.LOGIN, data);
}

async function getCurrentUser() {
  const axiosClient = new AxiosClient();
  return axiosClient.get(USER.GETME);
}

async function updateUser(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.patch(USER.UPDATE_USER, data);
}

async function updatePassword(data) {
  const axiosClient = new AxiosClient();
  return axiosClient.patch(USER.UPDATE_USER_PASSWORD, data);
}

export { registerUser, loginUser, getCurrentUser, updateUser, updatePassword };
