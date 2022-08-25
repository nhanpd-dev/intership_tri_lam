import { setLocalStorage, getLocalStorage, removeLocalStorage } from '../../utils';
import { createReducer } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  isLoading: false,
  error: null,
  product: {},
  cart: !!getLocalStorage('CART') ? JSON.parse(getLocalStorage('CART')) : [],
  quantity: !!getLocalStorage('CART') ? JSON.parse(getLocalStorage('CART')).length : 0,
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

  if (indexExist !== -1) {
    cloneCart[indexExist].quantity += action.payload.quantity;
  } else {
    cloneCart.push(action.payload);
  }

  setLocalStorage('CART', JSON.stringify(cloneCart));

  return {
    ...state,
    active: true,
    quantity: indexExist !== -1 ? state.quantity : state.quantity + 1,
    cart: cloneCart,
  };
};

const deleteCart = (state, action) => {
  if (action.payload) {
    const newCart = state.cart.filter((item) => item.productId !== action.payload.productId);

    setLocalStorage('CART', JSON.stringify(newCart));
    return {
      ...state,
      cart: newCart,
      quantity: newCart.length,
    };
  } else {
    removeLocalStorage('CART');

    return {
      ...initialState,
      quantity: 0,
    };
  }
};

export default createReducer(initialState, {
  [Types.GET_PRODUCT_REQUEST]: getProductRequest,
  [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [Types.GET_PRODUCT_FAIL]: getProductFail,
  [Types.ORDER_CART]: orderCart,
  [Types.DELETE_CART]: deleteCart,
});
