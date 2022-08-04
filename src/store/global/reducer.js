import { createReducer, updateObject } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  users: [],
  error: null,
};

function registerRequest(state) {
  return {
    ...state,
  };
}
function registerSuccess(state) {
  return updateObject(state);
}
function registerFail(state, error) {
  return updateObject(state, {
    error,
  });
}
export default createReducer(initialState, {
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCCESS]: registerSuccess,
  [Types.REGISTER_FAIL]: registerFail,
});
