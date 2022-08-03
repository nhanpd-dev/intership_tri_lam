/* eslint-disable no-console */
import { put, call, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFail } from "./action";
import { LOGIN_REQUEST } from "./constants";
import { loginUser } from "../../services";
export function* loginSaga({ payload }) {
  try {
    const response = yield call(loginUser, payload);
    if (response) {
      // localStorage.setItem("token", JSON.stringify(response.data.data.token));
      yield put(loginSuccess());
    }
  } catch (error) {
    yield put(loginFail(error));
  }
}

export default function* globalSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
