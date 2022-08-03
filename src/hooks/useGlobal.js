/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer, useInjectSaga } from "../utils";
import reducer from "../store/global/reducer";
import saga from "../store/global/saga";
import { makeSelectUsers } from "../store/global/selector";
import { loginRequest } from "../store/global/action";
export const useGlobalStore = () => {
  useInjectSaga({ key: "globalStore", saga });
  useInjectReducer({ key: "globalStore", reducer });

  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsers());
  const loginUser = (data, callbackSuccess, callbackFailure) => {
    dispatch(loginRequest(data, callbackSuccess, callbackFailure));
  };

  return { users, loginUser };
};
