import { createReducer } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  error: null,
  orders: null,
};

const orderRequest = (state) => ({
  ...state,
  isLoading: true,
});

const orderSuccess = (state, action) => ({
  ...state,
  orders: action.payload,
});

const orderFail = (state, action) => ({
  ...state,
  error: action.payload,
});

export default createReducer(initialState, {
  [Types.ORDER_REQUEST]: orderRequest,
  [Types.ORDER_SUCCESS]: orderSuccess,
  [Types.ORDER_FAIL]: orderFail,
});
