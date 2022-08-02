/* eslint-disable no-console */
import { put, call, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFail } from "./action";
import { LOGIN_REQUEST } from "./constants";
import { loginUser } from "../../services";

export function* loginSaga({ payload, callback, callback1 }) {
  try {
    const res = yield call(loginUser, payload);
    callback();
    if (res) {
      localStorage.setItem("token", JSON.stringify(res.data.data.token));
      yield put(loginSuccess());
    }
  } catch (error) {
    console.log(error);
    callback1();
    yield put(loginFail(error));
  }
}

export default function* globalSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
