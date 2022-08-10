import React from 'react';
import { Row, Col, Space, Button, Typography } from 'antd';

export default function InfoAuth({ t }) {
  const { Title, Text } = Typography;

  return (
    <Space direction='vertical' size='large'>
      <Row>
        <Col span={24}>
          <Title level={5}>{t('security')}</Title>
        </Col>
      </Row>

      <Row type='flex' align='middle'>
        <Col md={17} sm={16} xs={16}>
          <Text>{t('setting_password')}</Text>
        </Col>
        <Col md={7} sm={8} xs={8}>
          <Button size='small'>{t('setting')}</Button>
        </Col>
      </Row>
    </Space>
  );
}
