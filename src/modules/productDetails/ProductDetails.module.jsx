import ProductDetailsTitle from './component/productDetailsTitle/ProductDetailsTitle';
import ProductDetailsBuy from './component/productDetailsBuy/ProductDetailsBuy';
import ProductDetailsDescription from './component/productDetailsDescription/ProductDetailsDescription';
import { ProductDetailsWrapper } from './styled';
const ProductDetailsModule = () => {
  return (
    <ProductDetailsWrapper>
      <ProductDetailsTitle />
      <ProductDetailsBuy />
      <ProductDetailsDescription />
    </ProductDetailsWrapper>
  );
};

export default ProductDetailsModule;
