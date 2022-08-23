import { useEffect } from 'react';

import { useProductStore } from '../../../hooks/useProductDetail';
import { getLocalStorage } from '../../../utils';

const useGetLocalCart = () => {
  const { isActive, orderToCart } = useProductStore();

  useEffect(() => {
    if (!!getLocalStorage('CART') && isActive === false) {
      const cartLocal = [...JSON.parse(getLocalStorage('CART'))];

      orderToCart(cartLocal, true);
    }
  }, []);
};

export { useGetLocalCart };
