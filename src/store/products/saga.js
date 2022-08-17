/* eslint-disable no-console */
import { call, put, takeLatest } from 'redux-saga/effects';

import * as Types from './constants';
import { fetchProducts, getProduct } from '../../services/test';
import { fetchProductsSuccess, fetchProductsFail, getProductSuccess, getProductFail } from './action';

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

export function* getProductSaga({ product_id }) {
  try {
    const response = yield call(getProduct, product_id);
    console.log(response);
    if (response) {
      yield put(getProductSuccess());
    }
  } catch (err) {
    yield put(getProductFail(err));
  }
}

export default function* globalSaga() {
  yield takeLatest(Types.FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
  yield takeLatest(Types.GET_PRODUCT_REQUEST, getProductSaga);
}
