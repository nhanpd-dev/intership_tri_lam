/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Typography, Input } from 'antd';
import { Controller } from 'react-hook-form';

import { Wrapper, WrapperError } from './styled';

const FormInput = ({ label, name, defaultValue = '', disabled = false, control, errors, type, t, Icon }) => {
  const { Text } = Typography;

  return (
    <Wrapper>
      <Row justify='center' align='middle'>
        <Col xl={7} sm={24} xs={24} className='label'>
          {Icon && <Icon className='icon' />}
          <Text>{label}:</Text>
        </Col>
        <Col xl={17} sm={24} xs={24}>
          <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ field }) => <Input size='large' disabled={disabled} type={type} {...field} />}
          />
        </Col>

        <Col xl={{ span: 17, offset: 7 }} sm={24} xs={24}>
          <WrapperError>{errors && t(errors.message)}</WrapperError>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default FormInput;
