import React from 'react';
import { Col, Row, Input, Typography } from 'antd';

export default function FiledInput({ label, nameField }) {
  const { Text } = Typography;

  return (
    <Row type='flex' align='middle'>
      <Col xl={5} sm={24} xs={24}>
        <Text>{label}</Text>
      </Col>
      <Col xl={19} sm={24} xs={24}>
        <Input size='large' type='text' />
      </Col>
    </Row>
  );
}
