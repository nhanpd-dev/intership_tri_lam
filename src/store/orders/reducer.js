import { createReducer } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  error: null,
  orders: null,
  isLoading: false,
};

const orderRequest = (state) => ({
  ...state,
  isLoading: true,
});

const orderSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  orders: action.payload,
});

const orderFail = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

export default createReducer(initialState, {
  [Types.ORDER_REQUEST]: orderRequest,
  [Types.ORDER_SUCCESS]: orderSuccess,
  [Types.ORDER_FAIL]: orderFail,
});
