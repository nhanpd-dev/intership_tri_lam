import { LOGIN_SUCCCESS, LOGIN_REQUEST, LOGIN_FAIL } from "./constants";

export function loginRequest(data, callback, callback1) {
  return {
    type: LOGIN_REQUEST,
    payload: data,
    callback,
    callback1,
  };
}
export function loginSuccess() {
  return {
    type: LOGIN_SUCCCESS,
  };
}
export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
}
