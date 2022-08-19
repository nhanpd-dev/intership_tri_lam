import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { useInjectReducer, useInjectSaga } from '../../utils';
import reducer from '../../store/products/reducer';
import saga from '../../store/products/saga';
import { fetchProductsRequest } from '../../store/products/action';
import { makeSelectLoading, makeSelectError, makeSelectProducts } from '../../store/products/selector';

export const useProductsListStore = () => {
  useInjectSaga({ key: 'productsListStore', saga });
  useInjectReducer({ key: 'productsListStore', reducer });

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectLoading());
  const error = useSelector(makeSelectError());
  const products = useSelector(makeSelectProducts());

  const LIMIT = 10;
  const PAGE = 1;

  const [params, setParams] = useState({
    page: PAGE,
    limit: LIMIT,
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
