import { LOGIN_SUCCCESS, LOGIN_REQUEST, LOGIN_FAIL } from "./constants";

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data,
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
