import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pagination } from 'antd';
import { StarFilled } from '@ant-design/icons';

import { Container, ProductItem, Products } from './styled';
import { data } from './Products';

const pageSize = 10;

const ProductsModule = () => {
  const [pagination, setPagination] = useState({
    totalPage: data.length / pageSize,
    current: 1,
    minIndex: 0,
  });

  const { t } = useTranslation(['common']);

  const handlePaginationChange = (page) => {
    setPagination({
      ...pagination,
      current: page,
      minIndex: page * pageSize - pageSize,
    });
  };

  return (
    <Container>
      {data.length === 0 ? (
        <div>Chưa có dữ liệu sản phẩm</div>
      ) : (
        <>
          <Products>
            {data.slice(pagination.minIndex, pagination.minIndex + pageSize).map((product) => (
              <ProductItem key={product.id}>
                <div className='thumbnail'>
                  <Image preview={false} className='thumbnail-img' src={product.avatar} alt='productImage' />
                </div>
                <div className='title'>{product.name}</div>
                <div className='info'>
                  <div className='rating'>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </div>
                  <div className='sold'>
                    {t('sold')} {product.sold}
                  </div>
                </div>
                <div className='price'>
                  {product.price} {t('currency')}
                </div>
              </ProductItem>
            ))}
          </Products>
          <Pagination
            pageSize={pageSize}
            current={pagination.current}
            onChange={handlePaginationChange}
            total={data.length}
          />
        </>
      )}
    </Container>
  );
};

export default ProductsModule;
