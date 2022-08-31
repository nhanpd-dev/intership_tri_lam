import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { useInjectReducer, useInjectSaga } from '../../utils';
import reducer from '../../store/products/reducer';
import saga from '../../store/products/saga';
import { LIMIT_PRODUCTS, PAGE } from '../../store/constants';
import { fetchProductsRequest } from '../../store/products/action';
import { makeSelectLoading, makeSelectError, makeSelectProducts } from '../../store/products/selector';

export const useProductsListStore = () => {
  useInjectSaga({ key: 'productsListStore', saga });
  useInjectReducer({ key: 'productsListStore', reducer });

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectLoading());
  const error = useSelector(makeSelectError());
  const products = useSelector(makeSelectProducts());

  const [params, setParams] = useState({
    page: PAGE,
    limit: LIMIT_PRODUCTS,
    search: '',
  });

  const fetchProductsFunc = async (params) => {
    await dispatch(fetchProductsRequest(params));
  };

  useEffect(() => {
    fetchProductsFunc(params);
  }, []);

  useEffect(() => {
    fetchProductsFunc(params);
  }, [params]);

  return { isLoading, error, products, fetchProductsFunc, setParams, params };
};
