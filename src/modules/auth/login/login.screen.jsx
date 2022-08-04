import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import Banner from '../../../assets/images/shopingcart.png';
import { SigninSchema } from './schema';
import { Link } from 'react-router-dom';
import { useGlobalStore } from '../../../hooks/useGlobal';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import FiledInput from './components/FiledInput/FieldInput.component';
import { Container, WrapperImg, WrapperForm, FormLogin, ButtonItem, ValidationError } from './styled';

export default function LoginScreen() {
  const { loginUser } = useGlobalStore();

  const { t } = useTranslation(['login']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    loginUser(data);
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
              <FiledInput t={t} register={register} nameField={'email'} Icon={MailOutlined} />
              <Row>
                <Col span={17} offset={7}>
                  <ValidationError>{errors.email && t(errors.email?.message)}</ValidationError>
                </Col>
              </Row>
              <FiledInput t={t} register={register} nameField={'password'} Icon={LockOutlined} />

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
                    {t('dont_have_account')}?<Link to='/register'>{t('sign_up')}</Link>
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
