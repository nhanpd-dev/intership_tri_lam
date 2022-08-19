import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Col, Row, Spin, Form, Button, Image, Typography } from 'antd';

import toast from '../../../utils/toast';
import { SigninSchema } from './schema';
import { useAuthStore } from '../../../hooks/useAuth';
import InputField from './components/InputField';
import Banner from '../../../assets/imgs/login/shoppingcart.png';
import { Container, WrapperImg, WrapperForm, FormLogin } from './styled';

export default function LoginScreen() {
  const { Title, Text } = Typography;

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

  const loginSuccess = () => {
    toast('success', t('login_success'), '/', navigate);
  };

  const loginFail = (message) => {
    toast('error', t(message));
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
          <Image preview={false} src={Banner} alt='banner' className='banner' />
        </WrapperImg>
        <WrapperForm>
          <FormLogin>
            <Row>
              <Col span={24}>
                <Title level={3} className='form__header'>
                  {t('sign_in')}
                </Title>
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
