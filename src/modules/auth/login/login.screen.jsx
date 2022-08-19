import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Col, Row, notification } from 'antd';

import { SigninSchema } from './schema';
import { useAuthStore } from '../../../hooks/useAuth';
import FiledInput from './components/FieldInput';
import Banner from '../../../assets/imgs/login/shoppingcart.png';
import { Container, WrapperImg, WrapperForm, FormLogin, ButtonItem, ValidationError } from './styled';

export default function LoginScreen() {
  const { loginUser } = useAuthStore();

  const navigate = useNavigate();

  const { t } = useTranslation(['login']);

  const {
    register,
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
    <>
      <Container>
        <WrapperImg>
          <img src={Banner} alt='banner' className='img-banner' />
        </WrapperImg>
        <WrapperForm>
          <FormLogin>
            <Row>
              <Col span={24}>
                <h2 className='header-signin'>{t('sign_in')}</h2>
              </Col>
            </Row>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FiledInput t={t} register={register} nameField={'email'} Icon={MailOutlined} type='text' />
              <Row>
                <Col span={17} offset={7}>
                  <ValidationError>{errors.email && t(errors.email?.message)}</ValidationError>
                </Col>
              </Row>
              <FiledInput t={t} register={register} nameField={'password'} Icon={LockOutlined} type='password' />

              <Row>
                <Col span={17} offset={7}>
                  <ValidationError>{errors.password && t(errors.password?.message)}</ValidationError>
                </Col>
              </Row>
              <Row>
                <Col span={17} offset={7}>
                  <ButtonItem className='button-signin'>{t('sign_in')}</ButtonItem>
                </Col>
              </Row>
              <Row>
                <Col span={17} offset={7}>
                  <p>
                    {t('dont_have_account')}? <Link to='/register'>{t('sign_up')}</Link>
                  </p>
                </Col>
              </Row>
            </form>
          </FormLogin>
        </WrapperForm>
      </Container>
    </>
  );
}
