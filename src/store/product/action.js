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

export const orderCart = (data, isCartLocal) => ({
  type: Types.ORDER_CART,
  payload: data,
  isCartLocal,
});

export const updateCart = (data) => ({
  type: Types.UPDATE_CART,
  payload: data,
});

export const deleteCart = () => ({
  type: Types.DELETE_CART,
});
