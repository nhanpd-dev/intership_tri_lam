import * as Types from './constants';

export const getOrdersRequest = () => ({
  type: Types.GET_ORDERS_REQUEST,
});

export const getOrdersSuccess = (orders) => ({
  type: Types.GET_ORDERS_SUCCESS,
  orders,
});

export const getOrdersFail = (error) => ({
  type: Types.GET_ORDERS_FAIL,
  error,
});

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
