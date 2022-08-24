import { setLocalStorage, getLocalStorage, removeLocalStorage } from '../../utils';
import { createReducer } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  isLoading: false,
  error: null,
  product: {},
  cart: !!getLocalStorage('CART') ? JSON.parse(getLocalStorage('CART')) : [],
  quantity: !!getLocalStorage('CART') ? JSON.parse(getLocalStorage('CART')).length : 0,
  active: false,
};

const getProductRequest = (state) => ({
  ...state,
  isLoading: true,
});

const getProductSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  product: action.payload,
});

const getProductFail = (state, action) => ({
  ...state,
  isLoading: false,
});

const orderCart = (state, action) => {
  const indexExist = state.cart.findIndex((product) => product.productId === action.payload.productId);

  const cloneCart = [...state.cart];

  if (action.isCartLocal) {
    return {
      ...state,
      active: true,
    };
  }
  if (indexExist !== -1) {
    cloneCart[indexExist].quantity += action.payload.quantity;
  } else {
    cloneCart.push(action.payload);
  }

  setLocalStorage('CART', JSON.stringify(cloneCart));

  return {
    ...state,
    active: true,
    quantity: state.quantity + 1,
    cart: cloneCart,
  };
};

const updateCart = (state, action) => {
  setLocalStorage('CART', JSON.stringify(action.payload));

  return {
    ...state,
    cart: action.payload,
    quantity: action.payload,
  };
};

const deleteCart = (state) => {
  removeLocalStorage('CART');

  return {
    ...initialState,
  };
};

export default createReducer(initialState, {
  [Types.GET_PRODUCT_REQUEST]: getProductRequest,
  [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [Types.GET_PRODUCT_FAIL]: getProductFail,
  [Types.ORDER_CART]: orderCart,
  [Types.UPDATE_CART]: updateCart,
  [Types.DELETE_CART]: deleteCart,
});
