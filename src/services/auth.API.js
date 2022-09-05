import { axiosInstance } from './API';
import { USER } from './constants';

async function registerUser(data) {
  return await axiosInstance.post(USER.REGISTER, data);
}

async function loginUser(data) {
  return await axiosInstance.post(USER.LOGIN, data);
}

async function getCurrentUser() {
  return await axiosInstance.get(USER.GETME);
}

async function updateUser(data) {
  return await axiosInstance.patch(USER.UPDATE_USER, data);
}

async function updatePassword(data) {
  return await axiosInstance.patch(USER.UPDATE_USER_PASSWORD, data);
}
export { registerUser, loginUser, getCurrentUser, updateUser, updatePassword };
