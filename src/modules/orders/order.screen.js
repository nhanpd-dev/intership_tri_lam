import React, { useState } from 'react';
import { Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './styled';
import EmptyProducts from '../components/noProducts/noProducts.jsx';
import Ordered from './ordered/ordered';

function Orders() {
  const { t } = useTranslation(['orders']);

  const [orders, setOrders] = useState(true);

  const { Title } = Typography;

  return (
    <Wrapper>
      <Col span={22} offset={1}>
        <Row>
          <Title level={3}>{t('my_order')}</Title>
        </Row>
      </Col>

      {orders ? <Ordered /> : <EmptyProducts titleContent={t('No have order')} titleButton={t('tiep tuc mua')} />}
    </Wrapper>
  );
}

export default Orders;
