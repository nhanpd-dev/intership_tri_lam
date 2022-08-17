import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Typography, Input } from 'antd';

import { ValidationError } from '../styled';

export default function InputField({ label, nameField, Controller, control, errors, showPassword }) {
  const { Text } = Typography;

  const { t } = useTranslation(['security', 'common']);

  return (
    <Row justify='center' align='middle'>
      <Col xl={8} sm={24} xs={24}>
        <Text>{label}:</Text>
      </Col>

      <Col xl={16} sm={24} xs={24}>
        <Controller
          name={nameField}
          defaultValue=''
          control={control}
          render={({ field }) => <Input size='large' type={showPassword ? 'text' : 'password'} {...field} />}
        />
      </Col>

      <Col xl={{ span: 16, offset: 8 }} sm={24} xs={24}>
        <ValidationError>{errors && t(errors.message)}</ValidationError>
      </Col>
    </Row>
  );
}
