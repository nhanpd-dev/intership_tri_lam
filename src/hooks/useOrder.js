/* eslint-disable no-restricted-globals */
import { useDispatch } from 'react-redux';

import reducer from '../store/orders/reducer';
import saga from '../store/orders/saga';
import { orderRequest } from '../store/orders/actions';
import { useInjectReducer, useInjectSaga } from '../utils';

export const useOrderStore = () => {
  useInjectSaga({ key: 'globalStore', saga });
  useInjectReducer({ key: 'globalStore', reducer });

  const dispatch = useDispatch();

  const orderPost = (payload) => {
    dispatch(orderRequest(payload));
  };

  return {
    orderPost,
  };
};
