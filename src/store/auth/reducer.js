import { createReducer, updateObject } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  authenticated: false,
  currentUser: null,
  isLoading: false,
  error: null,
  orders: null,
};

const registerRequest = (state) => ({
  ...state,
});

const registerSuccess = (state) => {
  updateObject(state);
};

const registerFail = (error) => ({
  error,
});

const loginRequest = (state) => ({
  ...state,
  isLoading: true,
});

const loginSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  authenticated: true,
  currentUser: action.payload,
});

const loginFail = (state, action) => ({
  ...state,
  authenticated: false,
  error: action.payload,
});

const getCurrentUserRequest = (state) => ({
  ...state,
  isLoading: true,
});

const getCurrentUserSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  authenticated: true,
  currentUser: action.payload,
});

const getCurrentUserFail = (state, action) => ({
  ...state,
  authenticated: false,
  error: action.payload,
});

const updateUserRequest = (state) => ({
  ...state,
  isLoading: true,
});

const updateUserSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  currentUser: action.payload,
});

const updateUserFail = (state, action) => ({
  ...state,
  error: action.payload,
});
const updatePasswordRequest = (state) => updateObject(state, { isLoading: true });

const updatePasswordSuccess = (state) => updateObject(state, { isLoading: false });

const updatePasswordFail = (state, action) =>
  updateObject(state, {
    isLoading: false,
    error: action.error,
  });

export default createReducer(initialState, {
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAIL]: registerFail,

  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,

  [Types.GET_CURRENT_USER_REQUEST]: getCurrentUserRequest,
  [Types.GET_CURRENT_USER_SUCCESS]: getCurrentUserSuccess,
  [Types.GET_CURRENT_USER_FAIL]: getCurrentUserFail,

  [Types.UPDATE_USER_REQUEST]: updateUserRequest,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAIL]: updateUserFail,

  [Types.UPDATE_PASSWORD_REQUEST]: updatePasswordRequest,
  [Types.UPDATE_PASSWORD_SUCCESS]: updatePasswordSuccess,
  [Types.UPDATE_PASSWORD_FAIL]: updatePasswordFail,
});
