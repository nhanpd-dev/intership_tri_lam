import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Space, Button, Typography } from 'antd';

export default function InfoAuth() {
  const { Title, Text } = Typography;

  const { t } = useTranslation(['profile', 'common']);

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
