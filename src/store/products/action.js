import * as Types from './constants';

export const fetchProductsRequest = (payload) => ({
  type: Types.FETCH_PRODUCTS_REQUEST,
  payload,
});

export const fetchProductsSuccess = (payload) => ({
  type: Types.FETCH_PRODUCTS_SUCCESS,
  payload: payload,
});

export const fetchProductsFail = (error) => ({
  type: Types.FETCH_PRODUCTS_FAIL,
  payload: error,
});

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
