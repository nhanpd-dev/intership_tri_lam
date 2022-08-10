import React from 'react';
import { Col, Row, Input } from 'antd';

export default function FiledInput({ label, nameField }) {
  return (
    <Row type='flex' align='middle'>
      <Col xl={5} sm={24} xs={24}>
        {label}
      </Col>
      <Col xl={19} sm={24} xs={24}>
        <Input size='large' type='text' />
      </Col>
    </Row>
  );
}
