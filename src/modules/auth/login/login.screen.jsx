import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Col, Row, notification, Spin, Form, Button } from 'antd';

import { SigninSchema } from './schema';
import { useAuthStore } from '../../../hooks/useAuth';
import InputField from './components/InputField';
import Banner from '../../../assets/imgs/login/shoppingcart.png';
import { Container, WrapperImg, WrapperForm, FormLogin } from './styled';

export default function LoginScreen() {
  const { loginUser, isLoading } = useAuthStore();

  const navigate = useNavigate();

  const { t } = useTranslation(['login']);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  const toastMessage = (type, message, urlRedirect = '') => {
    notification[type]({ message: message });
    if (urlRedirect) navigate(urlRedirect);
  };

  const loginSuccess = () => {
    toastMessage('success', t('login_success'), '/');
  };

  const loginFail = (message) => {
    toastMessage('error', t(message));
  };

  const onSubmit = (data) => {
    loginUser({
      data,
      callbackSuccess: loginSuccess,
      callbackFail: loginFail,
    });
  };

  return (
    <Spin spinning={isLoading}>
      <Container>
        <WrapperImg>
          <img src={Banner} alt='banner' className='banner' />
        </WrapperImg>
        <WrapperForm>
          <FormLogin>
            <Row>
              <Col span={24}>
                <h2 className='form__header'>{t('sign_in')}</h2>
              </Col>
            </Row>
            <Form onFinish={handleSubmit(onSubmit)}>
              <InputField
                Controller={Controller}
                control={control}
                errors={errors?.email}
                nameField='email'
                label={t('email')}
                Icon={MailOutlined}
              />
              <InputField
                Controller={Controller}
                control={control}
                errors={errors?.password}
                nameField='password'
                label={t('password')}
                isHide={true}
                Icon={LockOutlined}
              />
              <Row>
                <Col xl={{ span: 17, offset: 7 }} sm={24} xs={24}>
                  <Button htmlType='submit' type='primary' className='form__button'>
                    {t('sign_in')}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xl={{ span: 17, offset: 7 }} sm={24} xs={24}>
                  <p className='form__link'>
                    {t('dont_have_account')}?{' '}
                    <Link to='/register' className='form__link'>
                      {t('sign_up')}
                    </Link>
                  </p>
                </Col>
              </Row>
            </Form>
          </FormLogin>
        </WrapperForm>
      </Container>
    </Spin>
  );
}
