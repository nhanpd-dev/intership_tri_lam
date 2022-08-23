import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Row, Col, Typography, Form, Button, Checkbox, Space, Spin } from 'antd';

import toastHook from '../../../hooks/toastHook';
import { ChangePasswordSchema } from './schema';
import { useAuthStore } from '../../../hooks/useAuth';
import FormInput from '../../../components/form/input';
import { Wrapper } from './styled';

export default function ChangePassword() {
  const { t } = useTranslation(['profile', 'common']);

  const { toastOn } = toastHook();

  const { Title } = Typography;

  const { isLoading, updatePassword } = useAuthStore();

  const [isHide, setIsHide] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
  });

  const updatePasswordSuccess = () => {
    toastOn('success', t('change_pass_success'), '/account/profile');
  };

  const updatePasswordFail = () => {
    toastOn('error', t('change_pass_fail'));
  };

  const onSubmit = (data) => {
    updatePassword({
      data,
      callbackSuccess: updatePasswordSuccess,
      callbackFail: updatePasswordFail,
    });
  };

  return (
    <Spin spinning={isLoading}>
      <Wrapper>
        <Form onFinish={handleSubmit(onSubmit)}>
          <Row className='form'>
            <Col span={24}>
              <Title level={5}>{t('change_password')}</Title>
            </Col>

            <Col span={12} offset={6}>
              <FormInput
                label={t('new_pass')}
                name='password'
                control={control}
                errors={errors?.password}
                type={isHide ? 'password' : 'text'}
                t={t}
              />

              <FormInput
                label={t('enter_new_pass')}
                name='confirm_password'
                control={control}
                errors={errors?.confirm_password}
                type={isHide ? 'password' : 'text'}
                t={t}
              />

              <Space direction='vertical' size='middle' className='form__space'>
                <Row>
                  <Col xl={{ span: 16, offset: 8 }} sm={24} xs={24} className='form__checkbox'>
                    <Checkbox
                      onChange={(e) => {
                        setIsHide(Boolean(!e.target.checked));
                      }}
                    >
                      {t('show_password')}
                    </Checkbox>
                  </Col>
                </Row>

                <Row>
                  <Col xl={{ span: 16, offset: 8 }} sm={24} xs={24} className='form__button'>
                    <Button type='primary' htmlType='submit'>
                      {t('save_change')}
                    </Button>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </Form>
      </Wrapper>
    </Spin>
  );
}
