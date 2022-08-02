/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 * @param  {state} login state
 * @param  {action} login action
 */
import { createReducer, updateObject } from "../../utils/redux";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCCESS } from "./constants";

export const initialState = {
  isLoading: false,
  users: [],
};

function loginRequest(state) {
  return {
    ...state,
    isLoading: true,
  };
}
function loginSuccess(state, { hasUser = true }) {
  return updateObject(state, {
    hasUser,
  });
}
function loginFail(state, { error }) {
  return updateObject(state, {
    error,
  });
}
export default createReducer(initialState, {
  [LOGIN_REQUEST]: loginRequest,
  [LOGIN_SUCCCESS]: loginSuccess,
  [LOGIN_FAIL]: loginFail,
});
