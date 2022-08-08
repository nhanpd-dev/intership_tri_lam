/* eslint-disable no-console */
import { call, put, takeLatest } from 'redux-saga/effects';

import * as Types from './constants';
import { registerUser, loginUser, getCurrentUser } from '../../services/test';
import {
  registerFail,
  registerSuccess,
  loginSuccess,
  loginFail,
  getCurrentUserFail,
  getCurrentUserSuccess,
} from './action';
import { setLocalStorage, STORAGE } from '../../utils';

export function* registerSaga({ payload, callback }) {
  try {
    const response = yield call(registerUser, payload);
    if (response) {
      yield put(registerSuccess());
      callback();
    }
  } catch (error) {
    yield put(registerFail(error.message));
    console.log(error);
  }
}

export function* loginSaga({ payload, callbackSuccess, callbackFail }) {
  try {
    const response = yield call(loginUser, payload);
    if (response) {
      setLocalStorage(STORAGE.USER_TOKEN, response.data.data.token);
      const currentUser = yield call(getCurrentUser);
      yield put(loginSuccess(currentUser.data.data));
      callbackSuccess();
    }
  } catch (error) {
    yield put(loginFail(error.message));
    callbackFail(error.message);
  }
}

export function* getCurrentUserSaga() {
  try {
    const response = yield call(getCurrentUser);
    if (response) {
      yield put(getCurrentUserSuccess(response.data.data));
    }
  } catch (error) {
    yield put(getCurrentUserFail(error));
  }
}

export default function* globalSaga() {
  yield takeLatest(Types.REGISTER_REQUEST, registerSaga);
  yield takeLatest(Types.LOGIN_REQUEST, loginSaga);
  yield takeLatest(Types.GET_CURRENT_USER_REQUEST, getCurrentUserSaga);
}
