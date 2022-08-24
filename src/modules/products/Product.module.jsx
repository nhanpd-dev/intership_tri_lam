import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Image, Pagination, Rate, Spin, Empty } from 'antd';

import { loadingIcon } from '../../components/loadingIcon/index';
import { useProductsListStore } from './useProductsList';
import { Container, ProductItem, Products } from './styled';

const ProductsModule = () => {
  const { products, fetchProductsFunc, setParams, params, isLoading } = useProductsListStore();

  const { t } = useTranslation(['common']);

  const navigate = useNavigate();

  const handlePaginationChange = (page) => {
    const newParams = { ...params, page };
    setParams(newParams);
    fetchProductsFunc(newParams);
  };

  const handleProductClick = (id) => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <Container>
      {!products.items?.length ? (
        <Empty description={t('no_data')} />
      ) : (
        <Spin spinning={isLoading} size='large' indicator={loadingIcon}>
          <Products>
            {products.items.map((product) => (
              <ProductItem key={product._id} onClick={() => handleProductClick(product._id)}>
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
                  {product.discount ? (
                    <div className='discount'>
                      <span className='discount-price'>
                        {product.price - product.price * product.discount} {t('currency')}
                      </span>
                      <span className='discount-label'>-{product.discount * 100} %</span>
                    </div>
                  ) : (
                    <div className='no-discount'>
                      {product.price} {t('currency')}
                    </div>
                  )}
                </div>
              </ProductItem>
            ))}
          </Products>
        </Spin>
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
