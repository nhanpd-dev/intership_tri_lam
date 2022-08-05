import React from 'react';

import { Input, ContentField, Fields } from './styled';

function FieldRegister({ t, register, nameField, Icon, type }) {
  return (
    <Fields>
      <ContentField>
        <span className='content_register-focus'>
          <Icon className='icon' />
          {t(nameField)}
          <p className='red-color'>*</p>
        </span>
        {type === 'radio' ? (
          <div className='selector-gender'>
            {t('male')}
            <Input
              className='check-input'
              name={nameField}
              type={type}
              placeholder={t(nameField)}
              {...register(nameField)}
            />
            {t('feMale')}
            <Input
              className='check-input'
              name={nameField}
              type={type}
              placeholder={t(nameField)}
              {...register(nameField)}
            />
          </div>
        ) : (
          <Input name={nameField} type={type} placeholder={t(nameField)} {...register(nameField)} />
        )}
      </ContentField>
    </Fields>
  );
}

export default FieldRegister;
