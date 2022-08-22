/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';

import reducer from '../store/orders/reducer';
import saga from '../store/orders/saga';
import { getOrdersRequest, orderRequest } from '../store/orders/actions';
import { useInjectReducer, useInjectSaga } from '../utils';
import { makeSelectOrders } from '../store/orders/selector';

export const useOrderStore = () => {
  useInjectSaga({ key: 'ordersStore', saga });
  useInjectReducer({ key: 'ordersStore', reducer });

  const dispatch = useDispatch();

  const orders = useSelector(makeSelectOrders());

  const getOrders = () => {
    dispatch(getOrdersRequest());
  };

  const orderPost = (payload) => {
    dispatch(orderRequest(payload));
  };

  return {
    orders,
    getOrders,
    orderPost,
  };
};
