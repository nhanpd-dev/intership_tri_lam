import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Typography, Form, Button, Checkbox, Space, notification, Spin } from 'antd';

import { ChangePasswordSchema } from './schema';
import { useAuthStore } from '../../../hooks/useAuth';
import InputField from './component/InputField';
import { WrapperFormChangePass } from './styled';

export default function ChangePassword() {
  const { t } = useTranslation(['security', 'common']);

  const { Title } = Typography;

  const navigate = useNavigate();

  const { isLoading, updatePassword } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
  });

  const onSubmit = (data) => {
    updatePassword(data, updateSuccess, updateFail);
  };

  const updateSuccess = async () => {
    await notification.success({
      message: t('change_pass_success'),
    });
    navigate('/account/profile');
  };

  const updateFail = async () => {
    await notification.error({
      message: t('change_pass_fail'),
    });
  };

  return (
    <WrapperFormChangePass>
      <Spin spinning={isLoading}>
        <Form onFinish={handleSubmit(onSubmit)}>
          <Row className='form'>
            <Col span={24}>
              <Title level={5}>{t('change_password')}</Title>
            </Col>

            <Col span={12} offset={6}>
              <InputField
                Controller={Controller}
                control={control}
                errors={errors?.password}
                nameField='password'
                label={t('new_pass')}
                showPassword={showPassword}
              />

              <InputField
                Controller={Controller}
                control={control}
                errors={errors?.confirm_password}
                nameField='confirm_password'
                label={t('enter_new_pass')}
                showPassword={showPassword}
              />

              <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
                <Row>
                  <Col xl={{ span: 16, offset: 8 }} sm={24} xs={24} className='form__checkbox'>
                    <Checkbox
                      onChange={(e) => {
                        e.target.checked ? setShowPassword(true) : setShowPassword(false);
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
      </Spin>
    </WrapperFormChangePass>
  );
}
