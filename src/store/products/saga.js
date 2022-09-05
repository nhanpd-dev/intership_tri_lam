/* eslint-disable no-console */
import { call, delay, put, takeLatest } from 'redux-saga/effects';

import * as Types from './constants';
import { fetchProducts } from '../../services/products.API';
import { fetchProductsSuccess, fetchProductsFail } from './action';

export function* fetchProductsSaga({ payload }) {
  yield delay(650);
  try {
    const response = yield call(fetchProducts, payload);

    if (response) {
      yield put(fetchProductsSuccess(response.data.data));
    }
  } catch (error) {
    yield put(fetchProductsFail(error));
  }
}

export default function* productsSaga() {
  yield takeLatest(Types.FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
