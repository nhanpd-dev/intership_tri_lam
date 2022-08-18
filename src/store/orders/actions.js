import * as Types from './constants';

export const orderRequest = (payload) => ({
  type: Types.ORDER_REQUEST,
  payload,
});

export const orderSuccess = (payload) => ({
  type: Types.ORDER_SUCCESS,
  payload: payload,
});

export const orderFail = (error) => ({
  type: Types.ORDER_FAIL,
  payload: error,
});
