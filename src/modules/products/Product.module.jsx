import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pagination, Rate } from 'antd';

import { useProductsListStore } from './useProductsList';
import { Container, ProductItem, Products } from './styled';

const ProductsModule = () => {
  const { products, fetchProductsFunc, setParams, params } = useProductsListStore();

  const { t } = useTranslation(['common']);

  const handlePaginationChange = async (page) => {
    const newParams = { ...params, page };
    await setParams(newParams);
    await fetchProductsFunc(newParams);
  };

  return (
    <Container>
      {!products.items.length ? (
        <div>{t('no_data')}</div>
      ) : (
        <Products>
          {products.items.map((product) => (
            <ProductItem key={product._id}>
              <div className='thumbnail'>
                <Image preview={false} className='thumbnail-img' src={product.thumbnail} alt='productImage' />
              </div>
              <div className='title'>{product.name}</div>
              <div className='info'>
                <div className='rating'>
                  <Rate disabled defaultValue={product.rate} />
                </div>
                <div className='sold'>
                  {t('sold')} {product.numberOfSell}
                </div>
              </div>
              <div className='price'>
                {product.price} {t('currency')}
              </div>
            </ProductItem>
          ))}
        </Products>
      )}

      <Pagination
        onChange={handlePaginationChange}
        total={products.total}
        current={products.activePage}
        pageSize={params.limit}
      />
    </Container>
  );
};

export default ProductsModule;
