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
  updateLoading,
  orderCart,
} from '../store/auth/action';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectAuthenticated,
  makeSelectCurrentUser,
  makeSelectCart,
} from '../store/auth/selector';

export const useAuthStore = () => {
  useInjectSaga({ key: 'globalStore', saga });
  useInjectReducer({ key: 'globalStore', reducer });

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectLoading());
  const error = useSelector(makeSelectError());
  const auth = useSelector(makeSelectAuthenticated());
  const currentUser = useSelector(makeSelectCurrentUser());
  const cart = useSelector(makeSelectCart());

  const registerUser = (data, callback) => {
    dispatch(registerRequest(data, callback));
  };

  const loginUser = (data, callbackSuccess, callbackFail) => {
    dispatch(loginRequest(data, callbackSuccess, callbackFail));
  };

  const getCurrentUser = () => {
    dispatch(getCurrentUserRequest());
  };

  const updateUser = (data, callbackSuccess, callbackFail) => {
    dispatch(updateUserRequest(data, callbackSuccess, callbackFail));
  };

  const updateAvatarLoading = (loading) => {
    dispatch(updateLoading(loading));
  };

  const ordertoCart = (data) => {
    dispatch(orderCart(data));
  };

  return {
    registerUser,
    loginUser,
    getCurrentUser,
    isLoading,
    error,
    auth,
    currentUser,
    cart,
    updateUser,
    updateAvatarLoading,
    ordertoCart,
  };
};
