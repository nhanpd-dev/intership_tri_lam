import { Col, Divider, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ProvisionalCalculation } from './styled';

function ProvisionalCalculationComp({ memoPrice, memoProvisional }) {
  const { t } = useTranslation(['cart']);

  return (
    <ProvisionalCalculation className='payment_content'>
      <Row className='content_selector'>
        <Col span={14} className='title_payment'>
          {t('provisional')}
        </Col>
        <Col span={10}>{memoProvisional}đ</Col>
      </Row>
      <Row className='content_selector'>
        <Col span={14} className='title_payment'>
          {t('promotions')}
        </Col>
        <Col span={10}>{memoPrice}đ</Col>
      </Row>
      <Divider />
      <Row className='content_selector'>
        <Col span={14} className='title_payment red-color'>
          {t('total_money')}
        </Col>
        <Col span={10} className='red-color'>
          {memoPrice}đ
        </Col>
      </Row>
    </ProvisionalCalculation>
  );
}

export default ProvisionalCalculationComp;
