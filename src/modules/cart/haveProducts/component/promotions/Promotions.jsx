import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { Promotions } from './styled';

function PromotionsComp() {
  const { t } = useTranslation(['cart']);

  const { Text } = Typography;

  return (
    <Promotions className='payment_content'>
      <Row className='content_selector'>
        <Col span={24}>
          <Text strong>{t('tiki_promotions')}</Text>
        </Col>
      </Row>
      <Row className='content_selector'>
        <Link to='#' className='selector_promotions'>
          <ThunderboltOutlined className='icon_promotions' />
          {t('select_or_enter_another_promotion')}
        </Link>
      </Row>
    </Promotions>
  );
}

export default PromotionsComp;
