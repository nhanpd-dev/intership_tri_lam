import React from 'react';
import { Col, Row } from 'antd';
import { LabelItem, InputItem } from './styled';
export default function FiledInput({ t, register, nameField, Icon }) {
  return (
    <Row type='flex' align='middle'>
      <Col span={6}>
        <LabelItem>
          <Icon className='icon' />
          {t(nameField)}
          <span className='icon-required'>*</span>
        </LabelItem>
      </Col>
      <Col span={18}>
        <InputItem type='text' {...register(nameField)} placeholder={t(nameField)} />
      </Col>
    </Row>
  );
}
