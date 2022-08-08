/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from 'antd';
import { useController, useFormContext } from 'react-hook-form';
import { WrapperFormItem, WrapperLabel } from './styled';

const FormInput = ({ label, name, rules, defaultValue = '', wrapperProps, ...rest }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  return (
    <WrapperFormItem
      {...wrapperProps}
      label={label && <WrapperLabel>{label}</WrapperLabel>}
      validateStatus={error ? 'error' : ''}
      help={error?.message}
    >
      <Input onChange={onChange} value={value} {...rest} />
    </WrapperFormItem>
  );
};

export default FormInput;
