import { useDispatch, useSelector } from 'react-redux';

import { useInjectReducer, useInjectSaga } from '../utils';
import reducer from '../store/product/reducer';
import saga from '../store/product/saga';
import { getProductRequest, orderCart, updateCart, deleteCart } from '../store/product/action';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectProduct,
  makeSelectCart,
  makeSelectQuantityCart,
  makeSelectActive,
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

  const isActive = useSelector(makeSelectActive());

  const getProductFunc = async (payload) => {
    await dispatch(getProductRequest(payload));
  };

  const orderToCart = (data) => {
    dispatch(orderCart(data));
  };

  const updateToCart = (data) => {
    dispatch(updateCart(data));
  };

  const deleteToCart = () => {
    dispatch(deleteCart());
  };

  return {
    isLoading,
    isActive,
    error,
    product,
    cart,
    quantityCart,
    getProductFunc,
    orderToCart,
    updateToCart,
    deleteToCart,
  };
};
