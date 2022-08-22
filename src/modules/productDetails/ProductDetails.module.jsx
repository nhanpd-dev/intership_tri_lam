import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Spin } from 'antd';

import ProductDetailsTitle from './component/productDetailsTitle/ProductDetailsTitle';

import ProductDetailsBuy from './component/productDetailsBuy/ProductDetailsBuy';

import ProductDetailsDescription from './component/productDetailsDescription/ProductDetailsDescription';

import { useProductStore } from './useProductDetails';

import { getLocalStorage } from '../../utils';

import { ProductDetailsWrapper } from './styled';

const ProductDetailsModule = () => {
  const { isLoading, product, getProductFunc, ordertoCart, isActive } = useProductStore();

  const { id } = useParams();

  useEffect(() => {
    getProductFunc(id);
  }, [id]);

  const dataProduct = product?.data ? product?.data : {};

  useEffect(() => {
    if (!!getLocalStorage('CART') & (isActive === false)) {
      const cartLocal = [...JSON.parse(getLocalStorage('CART'))];

      ordertoCart(cartLocal, 1);
    }
  }, []);

  return (
    <Spin spinning={isLoading} size='large'>
      <ProductDetailsWrapper>
        <ProductDetailsTitle
          categoryId={dataProduct.categoryId}
          nameProduct={dataProduct.name}
          numberOfSell={dataProduct.numberOfSell}
          discount={dataProduct.discount}
          id={dataProduct._id}
        />
        <ProductDetailsBuy
          thumbnail={dataProduct.thumbnail}
          listImg={dataProduct.images}
          price={dataProduct.price}
          quantity={dataProduct.quantity}
          id={dataProduct._id}
          name={dataProduct.name}
          discount={dataProduct.discount}
        />
        <ProductDetailsDescription description={dataProduct.description} />
      </ProductDetailsWrapper>
    </Spin>
  );
};

export default ProductDetailsModule;
