import { call, put, takeLatest } from 'redux-saga/effects';

import * as Types from './constants';

import { getProduct } from '../../services/product.API';

import { getProductSuccess, getProductFail } from './action';

export function* getProductSaga(payload) {
  try {
    const response = yield call(getProduct, payload.payload);
    if (response) {
      yield put(getProductSuccess(response.data));
    }
  } catch (err) {
    yield put(getProductFail(err));
  }
}

export default function* globalSaga() {
  yield takeLatest(Types.GET_PRODUCT_REQUEST, getProductSaga);
}
