import { Spin } from 'antd';

import ProductDetailsTitle from './component/productDetailsTitle/ProductDetailsTitle';
import ProductDetailsBuy from './component/productDetailsBuy/ProductDetailsBuy';
import ProductDetailsDescription from './component/productDetailsDescription/ProductDetailsDescription';
import { useProductStore } from '../../hooks/useProductDetail';
import { useGetLocalCart } from './hooks/useGetLocalCart';
import { useGetProduct } from './hooks/useGetProduct';
import { ProductDetailsWrapper } from './styled';

const ProductDetailsModule = () => {
  const { isLoading } = useProductStore();

  const dataProduct = useGetProduct();

  useGetLocalCart();

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
