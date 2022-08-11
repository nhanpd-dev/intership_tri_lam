import { Col, Divider, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProvisionalCalculation } from './styled';

function ProvisionalCalculationComp() {
  const { t } = useTranslation(['cart']);

  return (
    <ProvisionalCalculation className='payment_content'>
      <Row className='content_selector'>
        <Col span={20} className='title_payment'>
          {t('provisional')}
        </Col>
        <Col span={4}>0đ</Col>
      </Row>
      <Row className='content_selector'>
        <Col span={20} className='title_payment'>
          {t('promotions')}
        </Col>
        <Col span={4}>0đ</Col>
      </Row>
      <Divider />
      <Row className='content_selector'>
        <Col span={20} className='title_payment'>
          {t('total_money')}
        </Col>
        <Col span={4}>0đ</Col>
      </Row>
    </ProvisionalCalculation>
  );
}

export default ProvisionalCalculationComp;
