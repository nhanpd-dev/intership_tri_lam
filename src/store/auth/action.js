import * as Types from './constants';

export const registerRequest = (data, callback) => ({
  type: Types.REGISTER_REQUEST,
  payload: data,
  callback,
});

export const registerSuccess = () => ({
  type: Types.REGISTER_SUCCESS,
});

export const registerFail = (error) => ({
  type: Types.REGISTER_FAIL,
  payload: error,
});

export const loginRequest = (payload) => ({
  type: Types.LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (user) => ({
  type: Types.LOGIN_SUCCESS,
  user,
});

export const loginFail = (error) => ({
  type: Types.LOGIN_FAIL,
  error,
});

export const getCurrentUserRequest = () => ({
  type: Types.GET_CURRENT_USER_REQUEST,
});

export const getCurrentUserSuccess = (currentUser) => ({
  type: Types.GET_CURRENT_USER_SUCCESS,
  currentUser,
});

export const getCurrentUserFail = (error) => ({
  type: Types.GET_CURRENT_USER_FAIL,
  error,
});

export const updateUserRequest = (payload) => ({
  type: Types.UPDATE_USER_REQUEST,
  payload,
});

export const updateUserSuccess = (user) => ({
  type: Types.UPDATE_USER_SUCCESS,
  user,
});

export const updateUserFail = (error) => ({
  type: Types.UPDATE_USER_FAIL,
  error,
});

export const updatePasswordRequest = (payload) => ({
  type: Types.UPDATE_PASSWORD_REQUEST,
  payload,
});

export const updatePasswordSuccess = () => ({
  type: Types.UPDATE_PASSWORD_SUCCESS,
});

export const updatePasswordFail = (error) => ({
  type: Types.UPDATE_PASSWORD_FAIL,
  error,
});
