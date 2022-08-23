/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';

import { useInjectReducer, useInjectSaga } from '../utils';
import reducer from '../store/auth/reducer';
import saga from '../store/auth/saga';
import {
  registerRequest,
  loginRequest,
  getCurrentUserRequest,
  updateUserRequest,
  updatePasswordRequest,
  logOutRequest,
} from '../store/auth/action';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectAuthenticated,
  makeSelectCurrentUser,
} from '../store/auth/selector';

export const useAuthStore = () => {
  useInjectSaga({ key: 'authStore', saga });
  useInjectReducer({ key: 'authStore', reducer });

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectLoading());
  const error = useSelector(makeSelectError());
  const auth = useSelector(makeSelectAuthenticated());
  const currentUser = useSelector(makeSelectCurrentUser());

  const registerUser = (payload) => {
    dispatch(registerRequest(payload));
  };

  const loginUser = (payload) => {
    dispatch(loginRequest(payload));
  };

  const getCurrentUser = () => {
    dispatch(getCurrentUserRequest());
  };

  const updateUser = (payload) => {
    dispatch(updateUserRequest(payload));
  };

  const updatePassword = (payload) => {
    dispatch(updatePasswordRequest(payload));
  };

  const logOutUser = () => {
    dispatch(logOutRequest());
  };

  return {
    registerUser,
    loginUser,
    getCurrentUser,
    isLoading,
    error,
    auth,
    currentUser,
    updateUser,
    updatePassword,
    logOutUser,
  };
};
