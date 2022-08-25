import * as Types from './constants';

export const getProductRequest = (payload) => ({
  type: Types.GET_PRODUCT_REQUEST,
  payload,
});

export const getProductSuccess = (payload) => ({
  type: Types.GET_PRODUCT_SUCCESS,
  payload,
});

export const getProductFail = (error) => ({
  type: Types.GET_PRODUCT_FAIL,
  payload: error,
});

export const orderCart = (data) => ({
  type: Types.ORDER_CART,
  payload: data,
});

export const deleteCart = (data) => ({
  type: Types.DELETE_CART,
  payload: data,
});
