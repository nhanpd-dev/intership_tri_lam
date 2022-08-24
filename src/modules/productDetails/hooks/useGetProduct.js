import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useProductStore } from '../../../hooks/useProductDetail';

const useGetProduct = () => {
  const { getProductFunc, product } = useProductStore();

  const { id } = useParams();

  useEffect(() => {
    getProductFunc(id);
  }, [id]);

  return !!product?.data ? product?.data : {};
};

export { useGetProduct };
