import { createReducer } from '../../utils/redux';

import * as Types from './constants';

import { setLocalStorage, removeLocalStorage, getLocalStorage } from '../../utils';

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
  const indexExist = state.cart.findIndex((product) => product.productId === action.payload.productId);

  let newCart = [];

  let cartLocal = [];

  let isCartLocal = action.isCartLocal;

  if (isCartLocal === 1) {
    cartLocal = action.payload;

    return {
      ...state,
      cart: [...state.cart, ...cartLocal],
      quantity: [...state.cart, ...cartLocal].length,
    };
  } else {
    if (indexExist !== -1) {
      state.cart[indexExist].quantity += action.payload.quantity;
      let cartOther =
        state.cart.filter((_, index) => {
          return index !== indexExist;
        }) || [];

      newCart = [state.cart[indexExist], ...cartOther];

      removeLocalStorage('CART');
      setLocalStorage('CART', JSON.stringify(newCart));

      return {
        ...state,
        cart: newCart,
        quantity: state.quantity + 1,
      };
    } else {
      newCart = [...state.cart, action.payload];

      removeLocalStorage('CART');
      setLocalStorage('CART', JSON.stringify(newCart));

      return {
        ...state,
        cart: newCart,
        quantity: state.quantity + 1,
      };
    }
  }
};

export default createReducer(initialState, {
  [Types.GET_PRODUCT_REQUEST]: getProductRequest,
  [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [Types.GET_PRODUCT_FAIL]: getProductFail,
  [Types.ORDER_CART]: orderCart,
});
