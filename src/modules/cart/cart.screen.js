/* eslint-disable no-unused-vars */
import { Col, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import HaveProducts from './haveProducts/haveProducts';
import NoProducts from '../components/noProducts/noProducts';
import { useProductStore } from '../../hooks/useProductDetail';
import { Wrapper } from './styled';

function Cart() {
  const { t } = useTranslation(['cart']);

  const { cart: postInCart } = useProductStore();

  const [cart, setCart] = useState(postInCart);

  const { Title } = Typography;

  return (
    <Wrapper>
      <Col span={22} offset={1}>
        <Row>
          <Title level={3}>{t('my_cart')}</Title>
        </Row>
      </Col>

      {cart.length ? (
        <HaveProducts />
      ) : (
        <NoProducts titleContent={t('there_are_no_products_in_the_cart')} titleButton={t('continue_to_buy_products')} />
      )}
    </Wrapper>
  );
}

export default Cart;
