/* eslint-disable no-console */
import { call, put, takeLatest } from 'redux-saga/effects';

import * as Types from './constants';
import { fetchProducts } from '../../services/test';
import { fetchProductsSuccess, fetchProductsFail } from './action';

export function* fetchProductsSaga({ payload }) {
  try {
    const response = yield call(fetchProducts, payload);

    if (response) {
      yield put(fetchProductsSuccess(response.data.data));
    }
  } catch (error) {
    yield put(fetchProductsFail(error));
  }
}

export default function* globalSaga() {
  yield takeLatest(Types.FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
