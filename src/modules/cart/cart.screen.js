/* eslint-disable no-unused-vars */
import { Col, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import HaveProducts from './haveProducts/HaveProducts';
import NoProducts from './noProducts/NoProducts';
import { Wrapper } from './styled';

function Cart() {
  const { t } = useTranslation(['cart']);

  const [cart, setCart] = useState(true);

  const { Title } = Typography;

  return (
    <Wrapper>
      <Col span={22} offset={1}>
        <Row>
          <Title level={3}>{t('my_cart')}</Title>
        </Row>
      </Col>
      {cart ? <HaveProducts /> : <NoProducts />}
    </Wrapper>
  );
}

export default Cart;
