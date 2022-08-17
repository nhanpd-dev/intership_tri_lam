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

export const loginRequest = (payload, callbackSuccess, callbackFail) => ({
  type: Types.LOGIN_REQUEST,
  payload,
  callbackSuccess,
  callbackFail,
});

export const loginSuccess = (payload) => ({
  type: Types.LOGIN_SUCCESS,
  payload: payload,
});

export const loginFail = (error) => ({
  type: Types.LOGIN_FAIL,
  payload: error,
});

export const getCurrentUserRequest = () => ({
  type: Types.GET_CURRENT_USER_REQUEST,
});

export const getCurrentUserSuccess = (payload) => ({
  type: Types.GET_CURRENT_USER_SUCCESS,
  payload: payload,
});

export const getCurrentUserFail = (error) => ({
  type: Types.GET_CURRENT_USER_FAIL,
  payload: error,
});

export const orderCart = (data) => {
  console.log('data action', data);
  return {
    type: Types.ORDER_CART,
    payload: data,
  };
};

export const orderRequest = (data, callback) => ({
  type: Types.ORDER_REQUEST,
  payload: data,
  callback,
});

export const orderSuccess = () => ({
  type: Types.ORDER_SUCCESS,
});

export const orderFail = (error) => ({
  type: Types.ORDER_FAIL,
});

export const updateUserRequest = (payload, callbackSuccess, callbackFail) => ({
  type: Types.UPDATE_USER_REQUEST,
  payload,
  callbackSuccess,
  callbackFail,
});

export const updateUserSuccess = (payload) => ({
  type: Types.UPDATE_USER_SUCCESS,
  payload: payload,
});

export const updateUserFail = (error) => ({
  type: Types.UPDATE_USER_FAIL,
  payload: error,
});

export const updateLoading = (payload) => ({
  type: Types.UPDATE_LOADING,
  payload,
});
