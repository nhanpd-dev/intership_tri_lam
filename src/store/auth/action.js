import * as Types from './constants';

export const registerRequest = (payload) => ({
  type: Types.REGISTER_TYPE.REGISTER_REQUEST,
  payload,
});

export const registerSuccess = (user) => ({
  type: Types.REGISTER_TYPE.REGISTER_SUCCESS,
  user,
});

export const registerFail = (error) => ({
  type: Types.REGISTER_TYPE.REGISTER_FAILURE,
  error,
});

export const loginRequest = (payload) => ({
  type: Types.LOGIN_TYPE.LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (user) => ({
  type: Types.LOGIN_TYPE.LOGIN_SUCCESS,
  user,
});

export const loginFail = (error) => ({
  type: Types.LOGIN_TYPE.LOGIN_FAILURE,
  error,
});

export const getCurrentUserRequest = () => ({
  type: Types.GET_USER_TYPE.GET_CURRENT_USER_REQUEST,
});

export const getCurrentUserSuccess = (currentUser) => ({
  type: Types.GET_USER_TYPE.GET_CURRENT_USER_SUCCESS,
  currentUser,
});

export const getCurrentUserFail = (error) => ({
  type: Types.GET_USER_TYPE.GET_CURRENT_USER_FAILURE,
  error,
});

export const updateUserRequest = (payload) => ({
  type: Types.UPDATE_USER_TYPE.UPDATE_USER_REQUEST,
  payload,
});

export const updateUserSuccess = (user) => ({
  type: Types.UPDATE_USER_TYPE.UPDATE_USER_SUCCESS,
  user,
});

export const updateUserFail = (error) => ({
  type: Types.UPDATE_USER_TYPE.UPDATE_USER_FAILURE,
  error,
});

export const updatePasswordRequest = (payload) => ({
  type: Types.UPDATE_PASSWORD_TYPE.UPDATE_PASSWORD_REQUEST,
  payload,
});

export const updatePasswordSuccess = () => ({
  type: Types.UPDATE_PASSWORD_TYPE.UPDATE_PASSWORD_SUCCESS,
});

export const updatePasswordFail = (error) => ({
  type: Types.UPDATE_PASSWORD_TYPE.UPDATE_PASSWORD_FAILURE,
  error,
});

export const logOutRequest = () => ({ type: Types.LOGOUT_TYPES.LOGOUT_USER_REQUEST });

export const logOutSuccess = () => ({ type: Types.LOGOUT_TYPES.LOGOUT_USER_SUCCESS });

export const logOutFailure = (error) => ({ type: Types.LOGOUT_TYPES.LOGOUT_USER_FAILURE, error });
