/* eslint-disable no-console */
import { call, put, takeEvery } from 'redux-saga/effects';

import * as Types from './constants';
import { registerUser, loginUser, getCurrentUser, updateUser, updatePassword } from '../../services/auth.API';
import {
  registerFail,
  registerSuccess,
  loginSuccess,
  loginFail,
  getCurrentUserFail,
  getCurrentUserSuccess,
  updateUserSuccess,
  updateUserFail,
  updatePasswordSuccess,
  updatePasswordFail,
  logOutSuccess,
  logOutFailure,
} from './action';
import { setLocalStorage, STORAGE } from '../../utils';

export function* registerSaga({ payload }) {
  const { data, callbackSuccess, callbackFail } = payload;

  try {
    const response = yield call(registerUser, data);

    if (response.data.code === 200) {
      yield put(registerSuccess());
      callbackSuccess();
    } else {
      yield put(registerFail());
      callbackFail(response.data.data.key);
    }
  } catch (error) {
    yield put(registerFail(error.message));
    callbackFail(error.key);
  }
}

export function* loginSaga({ payload }) {
  const { data, callbackSuccess, callbackFail } = payload;

  try {
    const response = yield call(loginUser, data);

    if (response) {
      setLocalStorage(STORAGE.USER_TOKEN, response.data.data.token);
      const currentUser = yield call(getCurrentUser);
      yield put(loginSuccess(currentUser.data.data));
      callbackSuccess();
    }
  } catch (error) {
    yield put(loginFail(error.message));
    callbackFail(error.key);
  }
}

export function* getCurrentUserSaga() {
  try {
    const response = yield call(getCurrentUser);

    yield put(getCurrentUserSuccess(response.data.data));
  } catch (error) {
    yield put(getCurrentUserFail(error));
  }
}

export function* updateUserSaga({ payload }) {
  const { data, callbackSuccess, callbackFail } = payload;

  try {
    yield call(updateUser, data);
    const currentUser = yield call(getCurrentUser);
    yield put(updateUserSuccess(currentUser.data.data));
    callbackSuccess();
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

export function* logoutSaga() {
  try {
    yield put(logOutSuccess());
    localStorage.removeItem('USER_TOKEN');
  } catch (error) {
    yield put(logOutFailure(error));
  }
}

export default function* authSaga() {
  yield takeEvery(Types.REGISTER_TYPE.REGISTER_REQUEST, registerSaga);
  yield takeEvery(Types.LOGIN_TYPE.LOGIN_REQUEST, loginSaga);
  yield takeEvery(Types.GET_USER_TYPE.GET_CURRENT_USER_REQUEST, getCurrentUserSaga);
  yield takeEvery(Types.UPDATE_USER_TYPE.UPDATE_USER_REQUEST, updateUserSaga);
  yield takeEvery(Types.UPDATE_PASSWORD_TYPE.UPDATE_PASSWORD_REQUEST, updatePasswordSaga);
  yield takeEvery(Types.LOGOUT_TYPES.LOGOUT_USER_REQUEST, logoutSaga);
}
