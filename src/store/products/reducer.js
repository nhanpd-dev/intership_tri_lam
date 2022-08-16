import { createReducer } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  isLoading: false,
  error: null,
  products: {
    items: [],
    total: 0,
    limit: 0,
    activePage: 1,
  },
};

const fetchProductsRequest = (state) => ({
  ...state,
  isLoading: true,
});

const fetchProductsSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    products: {
      items: action.payload.items,
      total: action.payload.total,
      limit: action.payload.limit,
      activePage: action.payload.page,
    },
  };
};

const fetchProductsFail = (state, action) => ({
  ...state,
  error: action.payload,
});

export default createReducer(initialState, {
  [Types.FETCH_PRODUCTS_REQUEST]: fetchProductsRequest,
  [Types.FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
  [Types.FETCH_PRODUCTS_FAIL]: fetchProductsFail,
});
