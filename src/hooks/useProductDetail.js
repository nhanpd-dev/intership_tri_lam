import { useDispatch, useSelector } from 'react-redux';

import { useInjectReducer, useInjectSaga } from '../utils';
import reducer from '../store/product/reducer';
import saga from '../store/product/saga';
import { getProductRequest, orderCart, deleteCart } from '../store/product/action';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectProduct,
  makeSelectCart,
  makeSelectQuantityCart,
} from '../store/product/selector';

export const useProductStore = () => {
  useInjectSaga({ key: 'productStore', saga });
  useInjectReducer({ key: 'productStore', reducer });

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectLoading());

  const error = useSelector(makeSelectError());

  const product = useSelector(makeSelectProduct());

  const cart = useSelector(makeSelectCart());

  const quantityCart = useSelector(makeSelectQuantityCart());

  const getProductFunc = (payload) => {
    dispatch(getProductRequest(payload));
  };

  const orderToCart = (data) => {
    dispatch(orderCart(data));
  };

  const deleteToCart = (data) => {
    dispatch(deleteCart(data));
  };

  return {
    isLoading,
    error,
    product,
    cart,
    quantityCart,
    getProductFunc,
    orderToCart,
    deleteToCart,
  };
};
