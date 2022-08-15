/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from '../utils';
import reducer from '../store/auth/reducer';
import saga from '../store/auth/saga';
import { registerRequest, loginRequest, getCurrentUserRequest, orderRequest } from '../store/auth/action';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectAuthenticated,
  makeSelectCurrentUser,
} from '../store/auth/selector';

export const useAuthStore = () => {
  useInjectSaga({ key: 'globalStore', saga });
  useInjectReducer({ key: 'globalStore', reducer });

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectLoading());
  const error = useSelector(makeSelectError());
  const auth = useSelector(makeSelectAuthenticated());
  const currentUser = useSelector(makeSelectCurrentUser());

  const registerUser = (data, callback) => {
    dispatch(registerRequest(data, callback));
  };

  const loginUser = (data, callbackSuccess, callbackFail) => {
    dispatch(loginRequest(data, callbackSuccess, callbackFail));
  };

  const getCurrentUser = () => {
    dispatch(getCurrentUserRequest());
  };

  const order = (data, callback) => {
    dispatch(orderRequest(data, callback));
  };

  return { registerUser, loginUser, getCurrentUser, order, isLoading, error, auth, currentUser };
};
