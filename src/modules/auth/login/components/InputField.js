import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Typography, Input } from 'antd';

import { ValidationError, Wrapper } from './styled';

export default function InputField({ label, nameField, Controller, control, errors, isHide, Icon }) {
  const { Text } = Typography;

  const { t } = useTranslation(['login', 'common']);

  return (
    <Wrapper>
      <Row justify='center' align='middle'>
        <Col xl={7} sm={24} xs={24} className='label'>
          <Icon className='icon' />
          <Text>{label}:</Text>
        </Col>
        <Col xl={17} sm={24} xs={24}>
          <Controller
            name={nameField}
            defaultValue=''
            control={control}
            render={({ field }) => <Input size='large' type={isHide ? 'password' : 'text'} {...field} />}
          />
        </Col>

        <Col xl={{ span: 17, offset: 7 }} sm={24} xs={24}>
          <ValidationError>{errors && t(errors.message)}</ValidationError>
        </Col>
      </Row>
    </Wrapper>
  );
}
