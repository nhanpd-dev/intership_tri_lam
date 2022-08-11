/* eslint-disable no-unused-vars */
import { Col, Typography } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import HaveProducts from './haveProducts/HaveProducts';
import NoProducts from './noProducts/NoProducts';
import { MyCart } from './styled';

function Cart() {
  const { t } = useTranslation(['cart']);

  const [cart, setCart] = useState(true);

  const { Title } = Typography;

  return (
    <MyCart>
      <Col span={22} offset={1}>
        <Title level={3}>{t('my_cart')}</Title>
      </Col>
      {cart ? <HaveProducts /> : <NoProducts />}
    </MyCart>
  );
}

export default Cart;
