/* eslint-disable no-console */
import { call, put, takeLatest } from 'redux-saga/effects';

import * as Types from './constants';
import { registerUser, loginUser, getCurrentUser, order, updateUser, updatePassword } from '../../services/test';
import {
  registerFail,
  registerSuccess,
  loginSuccess,
  loginFail,
  getCurrentUserFail,
  getCurrentUserSuccess,
  orderSuccess,
  orderFail,
  updateUserSuccess,
  updateUserFail,
  updatePasswordSuccess,
  updatePasswordFail,
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

export function* orderSaga({ payload, callbackSuccess, callbackFail }) {
  try {
    const response = yield call(order, payload);
    if (response) {
      yield put(orderSuccess());
      callbackSuccess();
    }
  } catch (error) {
    yield put(orderFail(error.message));
    callbackFail();
  }
}

export function* updateUserSaga({ payload, callbackSuccess, callbackFail }) {
  try {
    const response = yield call(updateUser, payload);
    if (response) {
      const currentUser = yield call(getCurrentUser);
      yield put(updateUserSuccess(currentUser.data.data));
      callbackSuccess();
    }
  } catch (error) {
    yield put(updateUserFail(error));
    callbackFail();
  }
}

export function* updatePasswordSaga({ payload }) {
  const { data, callbackSuccess, callbackFail } = payload;

  try {
    yield call(updatePassword, data);
    yield put(updatePasswordSuccess());
    callbackSuccess();
  } catch (error) {
    yield put(updatePasswordFail(error));
    callbackFail();
  }
}

export default function* globalSaga() {
  yield takeLatest(Types.REGISTER_REQUEST, registerSaga);
  yield takeLatest(Types.LOGIN_REQUEST, loginSaga);
  yield takeLatest(Types.GET_CURRENT_USER_REQUEST, getCurrentUserSaga);
  yield takeLatest(Types.ORDER_REQUEST, orderSaga);
  yield takeLatest(Types.UPDATE_USER_REQUEST, updateUserSaga);
  yield takeLatest(Types.UPDATE_PASSWORD_REQUEST, updatePasswordSaga);
}
