import { createReducer, updateObject } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  authenticated: false,
  currentUser: null,
  isLoading: false,
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

function loginRequest(state) {
  return {
    ...state,
    isLoading: true,
  };
}
function loginSuccess(state, action) {
  return {
    ...state,
    isLoading: false,
    authenticated: true,
    currentUser: action.payload,
  };
}
function loginFail(state, action) {
  return {
    ...state,
    authenticated: false,
    error: action.payload,
  };
}

function getCurrentUserRequest(state) {
  return {
    ...state,
    isLoading: true,
  };
}
function getCurrentUserSuccess(state, action) {
  return {
    ...state,
    isLoading: false,
    authenticated: true,
    currentUser: action.payload,
  };
}
function getCurrentUserFail(state, action) {
  return {
    ...state,
    authenticated: false,
    error: action.payload,
  };
}

export default createReducer(initialState, {
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCCESS]: registerSuccess,
  [Types.REGISTER_FAIL]: registerFail,

  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,

  [Types.GET_CURRENT_USER_REQUEST]: getCurrentUserRequest,
  [Types.GET_CURRENT_USER_SUCCCESS]: getCurrentUserSuccess,
  [Types.GET_CURRENT_USER_FAIL]: getCurrentUserFail,
});
