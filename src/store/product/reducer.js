import { createReducer } from '../../utils/redux';

import * as Types from './constants';

export const initialState = {
  isLoading: false,
  error: null,
  product: {},
  cart: [],
  quantity: 0,
};

const getProductRequest = (state) => ({
  ...state,
  isLoading: true,
});

const getProductSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    product: action.payload,
  };
};

const getProductFail = (state, action) => ({
  ...state,
  isLoading: false,
});

const orderCart = (state, action) => {
  const newQuantity = state.quantity + action.payload.quantity;

  return {
    ...state,
    cart: [...state.cart, action.payload],
    quantity: newQuantity,
  };
};

export default createReducer(initialState, {
  [Types.GET_PRODUCT_REQUEST]: getProductRequest,
  [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [Types.GET_PRODUCT_FAIL]: getProductFail,
  [Types.ORDER_CART]: orderCart,
});
