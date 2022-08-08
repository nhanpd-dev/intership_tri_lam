import * as Types from './constants';

export function registerRequest(data, callback) {
  return {
    type: Types.REGISTER_REQUEST,
    payload: data,
    callback,
  };
}

export function registerSuccess() {
  return {
    type: Types.REGISTER_SUCCCESS,
  };
}

export function registerFail(error) {
  return {
    type: Types.REGISTER_FAIL,
    payload: error,
  };
}

export function loginRequest(payload, callbackSuccess, callbackFail) {
  return {
    type: Types.LOGIN_REQUEST,
    payload,
    callbackSuccess,
    callbackFail,
  };
}

export function loginSuccess(payload) {
  return {
    type: Types.LOGIN_SUCCCESS,
    payload: payload,
  };
}

export function loginFail(error) {
  return {
    type: Types.LOGIN_FAIL,
    payload: error,
  };
}

export function getCurrentUserRequest(payload) {
  return {
    type: Types.GET_CURRENT_USER_REQUEST,
  };
}

export function getCurrentUserSuccess(payload) {
  return {
    type: Types.GET_CURRENT_USER_SUCCCESS,
    payload: payload,
  };
}

export function getCurrentUserFail(error) {
  return {
    type: Types.GET_CURRENT_USER_FAIL,
    payload: error,
  };
}
