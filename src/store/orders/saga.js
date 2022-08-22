/* eslint-disable no-console */
import { call, put, takeLatest } from 'redux-saga/effects';

import * as Types from './constants';
import { order } from '../../services/cart.API';
import { orderSuccess, orderFail, getOrdersSuccess, getOrdersFail } from './actions';
import { getOrders } from '../../services/test';

export function* getOrderSaga() {
  try {
    const response = yield call(getOrders);
    yield put(getOrdersSuccess(response.data.data.items));
  } catch (error) {
    yield put(getOrdersFail(error));
  }
}

export function* postOrdersSaga({ payload }) {
  const { data, postOrderSuccess, postOrderFail } = payload;

  try {
    const response = yield call(order, data);
    if (response.data.code === 200) {
      yield put(orderSuccess());
      postOrderSuccess();
    } else {
      yield put(orderFail());
      postOrderFail();
    }
  } catch (error) {
    yield put(orderFail(error));
    postOrderFail();
  }
}

export default function* ordersSaga() {
  yield takeLatest(Types.ORDER_REQUEST, postOrdersSaga);
  yield takeLatest(Types.GET_ORDERS_REQUEST, getOrderSaga);
}
