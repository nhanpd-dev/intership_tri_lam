/* eslint-disable no-console */
import { call, put, takeLatest } from 'redux-saga/effects';

import * as Types from './constants';
import { registerUser } from '../../services/test';
import { registerFail, registerSuccess } from './action';

export function* registerSaga({ payload, callback }) {
  try {
    const response = yield call(registerUser, payload);
    if (response) {
      yield put(registerSuccess());
      callback();
    }
  } catch (error) {
    yield put(registerFail(error));
    console.log(error);
  }
}

export default function* globalSaga() {
  yield takeLatest(Types.REGISTER_REQUEST, registerSaga);
}
