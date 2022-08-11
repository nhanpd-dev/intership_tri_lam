import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Input, Typography } from 'antd';

import { ValidationError } from '../styled';

export default function FiledInput({ label, nameField, Controller, control, errors, Icon }) {
  const { t } = useTranslation(['profile', 'common']);

  const { Text } = Typography;

  return (
    <Row type='flex' align='middle'>
      <Col xl={5} sm={24} xs={24}>
        <Text>
          <Icon className='icon' />
          {label}
        </Text>
      </Col>

      <Col xl={19} sm={24} xs={24}>
        <Controller
          name={nameField}
          defaultValue=''
          control={control}
          render={({ field }) => <Input size='large' type='text' {...field} />}
        />
      </Col>

      <Col xl={{ span: 19, offset: 5 }} sm={24} xs={24}>
        <ValidationError>{errors && t(errors.message)}</ValidationError>
      </Col>
    </Row>
  );
}
