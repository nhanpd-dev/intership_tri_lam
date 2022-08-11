import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Divider, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Address } from './styled';

function AddressShippingComp() {
  const { t } = useTranslation(['cart']);

  const { Text } = Typography;

  return (
    <Address className='payment_content'>
      <Row className='content_selector'>
        <Col span={18}>
          <Text type='secondary' className='fs-16'>
            {t('delivered_to')}
          </Text>
        </Col>
        <Col span={6}>
          <Link to='#'>{t('change')}</Link>
        </Col>
      </Row>
      <Row className='content_selector'>
        <Col span={10}>
          <Text strong>Le Quang Bao Lam</Text>
        </Col>
        <Divider type='vertical' />
        <Col span={12}>
          <Text strong>0934945011</Text>
        </Col>
      </Row>
      <Row className='content_selector'>
        <Text type='secondary'>
          TDP 10, An Đô, số nhà 115 Kim Phụng., Phường Hương Chữ, Thị xã Hương Trà, Thừa Thiên Huế
        </Text>
      </Row>
    </Address>
  );
}

export default AddressShippingComp;
