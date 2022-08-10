import React from 'react';
import { Row, Col, Space, Button } from 'antd';

export default function InfoAuth() {
  return (
    <Space direction='vertical' size='large'>
      <Row>
        <Col span={24}>
          <h3>Bảo mật</h3>
        </Col>
      </Row>

      <Row type='flex' align='middle'>
        <Col md={17} sm={16} xs={16}>
          Thiết lập mật khẩu
        </Col>
        <Col md={7} sm={8} xs={8}>
          <Button size='small'>Cập nhập</Button>
        </Col>
      </Row>
    </Space>
  );
}
