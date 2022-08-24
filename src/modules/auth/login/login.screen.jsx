import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Col, Row, Spin, Form, Image, Typography } from 'antd';

import { PrimaryButton } from '../../../components/button';
import toastHook from '../../../hooks/toastHook';
import { SigninSchema } from './schema';
import { useAuthStore } from '../../../hooks/useAuth';
import FormInput from '../../../components/form/input';
import Banner from '../../../assets/imgs/login/shoppingcart.png';
import { LOGO_TIKI } from '../../../assets/imgs/layout';
import { Container, WrapperImg, WrapperForm, FormLogin } from './styled';

export default function LoginScreen() {
  const { Title, Text } = Typography;

  const { loginUser, isLoading } = useAuthStore();

  const { toastOn } = toastHook();

  const { t } = useTranslation(['login']);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  const loginSuccess = () => {
    toastOn('success', t('login_success'), '/');
  };

  const loginFail = (message) => {
    toastOn('error', t(message));
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
          <Image preview={false} src={Banner} alt='Banner' className='banner' />
        </WrapperImg>
        <WrapperForm>
          <FormLogin>
            <Row>
              <Col span={24}>
                <Link to='/'>
                  <Image className='form__logo' src={LOGO_TIKI} alt='Tiki' preview={false} />
                </Link>
                <Title level={3} className='form__header'>
                  {t('sign_in')}
                </Title>
              </Col>
            </Row>
            <Form onFinish={handleSubmit(onSubmit)}>
              <FormInput
                label={t('email')}
                name='email'
                control={control}
                errors={errors?.email}
                type='text'
                t={t}
                Icon={MailOutlined}
              />
              <FormInput
                label={t('password')}
                name='password'
                control={control}
                errors={errors?.password}
                type='password'
                t={t}
                Icon={LockOutlined}
              />
              <Row>
                <Col xl={{ span: 18, offset: 6 }} sm={24} xs={24}>
                  <PrimaryButton title={t('sign_in')} htmlType='submit' type='primary' />
                </Col>
              </Row>
              <Row>
                <Col xl={{ span: 18, offset: 6 }} sm={24} xs={24}>
                  <Text className='form__link'>
                    {t('dont_have_account')}?{' '}
                    <Link to='/register' className='form__link'>
                      {t('sign_up')}
                    </Link>
                  </Text>
                </Col>
              </Row>
            </Form>
          </FormLogin>
        </WrapperForm>
      </Container>
    </Spin>
  );
}
