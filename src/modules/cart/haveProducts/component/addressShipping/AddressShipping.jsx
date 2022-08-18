import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Divider, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Address } from './styled';
import { useAuthStore } from '../../../../../hooks/useAuth';

function AddressShippingComp() {
  const { t } = useTranslation(['cart']);

  const { currentUser } = useAuthStore();

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
          <Text strong>{currentUser?.username ? currentUser?.username : 'No name'}</Text>
        </Col>
        <Divider type='vertical' />
        <Col span={12}>
          <Text strong>{currentUser?.phoneNumber ? currentUser?.phoneNumber : '113'}</Text>
        </Col>
      </Row>
      <Row className='content_selector'>
        <Text type='secondary'>{currentUser?.address ? currentUser?.address : 'Thien Dang'}</Text>
      </Row>
    </Address>
  );
}

export default AddressShippingComp;
