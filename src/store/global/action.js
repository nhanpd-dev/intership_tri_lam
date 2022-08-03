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
