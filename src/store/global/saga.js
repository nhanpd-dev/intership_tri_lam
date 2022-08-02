/* eslint-disable no-console */
import { call, takeLatest } from 'redux-saga/effects';
// import {
//   getMaintainNoticeSuccess,
//   getMaintainNoticeFailure,
//   getStatusMaintainSuccess,
//   getStatusMaintainFailure
// } from './actions'
import { TEST_SAGA } from './constants';

import { getUsers } from '../../services';

export function* testSaga() {
    try {
        const users = yield call(getUsers);
        console.log('=====> get users: ', users);
    } catch (error) {
        console.log('====>error: ', error);
    }
}

export default function* globalSaga() {
    yield takeLatest(TEST_SAGA, testSaga);
}
