import { createReducer, updateObject } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  error: null,
  orders: null,
  isLoading: false,
};

const getOrdersRequest = (state) => updateObject(state, { isLoading: true });

const getOrdersSuccess = (state, action) => updateObject(state, { isLoading: false, orders: action.orders });

const getOrdersFail = (state, action) => updateObject(state, { error: action.error });

const orderRequest = (state) => updateObject(state, { isLoading: true });

const orderSuccess = (state, action) =>
  updateObject(state, {
    isLoading: false,
    orders: action.orders,
  });

const orderFail = (state, action) =>
  updateObject(state, {
    isLoading: false,
    error: action.payload,
  });

export default createReducer(initialState, {
  [Types.ORDER_REQUEST]: orderRequest,
  [Types.ORDER_SUCCESS]: orderSuccess,
  [Types.ORDER_FAIL]: orderFail,

  [Types.GET_ORDERS_REQUEST]: getOrdersRequest,
  [Types.GET_ORDERS_SUCCESS]: getOrdersSuccess,
  [Types.GET_ORDERS_FAIL]: getOrdersFail,
});
