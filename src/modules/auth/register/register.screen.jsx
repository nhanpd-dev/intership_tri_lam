import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  ManOutlined,
  CalendarOutlined,
  PhoneOutlined,
  LoginOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { useGlobalStore } from '../../../hooks/useGlobal';
import { schema } from './schema';
import LogoRegister from '../../../assets/imgs/logo.png';
import { Button, ContentField, ContentRegister, Fields, FormRegister, Input, ScreenRegister, Wrapper } from './styled';
import { replace } from 'lodash';

function RegisterScreen() {
  const { t } = useTranslation(['register', 'common']);

  const { registerUser } = useGlobalStore();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    registerUser({ email: data.email, password: data.password }, () => {
      navigate('/login', replace(true));
    });
  };

  return (
    <Wrapper>
      <ScreenRegister>
        <div className='logo-register'>
          <img className='logo_register-focus' src={LogoRegister} alt='banner' />
        </div>
        <FormRegister>
          <ContentRegister>
            <h2 className='text_header-register'>
              <LoginOutlined className='mr-icon' />
              {t('register')}
            </h2>
            <Link to='/' className='back-home'>
              <HomeOutlined className='mr-icon' />
              {t('common:home')}
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <Fields>
                <ContentField>
                  <span className='content_register-focus'>
                    <MailOutlined className='icon' />
                    {t('email')}
                    <p className='red-color'>*</p>
                  </span>
                  <Input name='email' type='text' placeholder={t('email')} {...register('email')} />
                </ContentField>
                <div className='error'>
                  <div className='mr-error'></div>
                  <div className='title-error'>{errors.email ? t(errors.email?.message) : ''}</div>
                </div>
              </Fields>

              {/* Password */}
              <Fields>
                <ContentField>
                  <span className='content_register-focus'>
                    <LockOutlined className='icon' />
                    {t('password')}
                    <p className='red-color'>*</p>
                  </span>
                  <Input name='passsword' type='password' placeholder={t('password')} {...register('password')} />
                </ContentField>
                <div className='error'>
                  <div className='mr-error'></div>
                  <div className='title-error'>{errors.password ? t(errors.password?.message) : ''}</div>
                </div>
              </Fields>

              {/* Full Name */}
              <Fields>
                <ContentField>
                  <span className='content_register-focus'>
                    <UserOutlined className='icon' />
                    {t('fullName')}
                    <p className='red-color'>*</p>
                  </span>
                  <Input name='fullName' type='text' placeholder={t('fullName')} {...register('fullName')} />
                </ContentField>
                <div className='error'>
                  <div className='mr-error'></div>
                  <div className='title-error'>{errors.fullName ? t(errors.fullName?.message) : ''}</div>
                </div>
              </Fields>

              {/* Gender */}
              <Fields>
                <ContentField>
                  <span className='content_register-focus'>
                    <ManOutlined className='icon' />
                    {t('gender')}
                    <p className='red-color'>*</p>
                  </span>
                  <div>
                    <ContentField>
                      <Input className='gender-input' type='radio' value='0' checked {...register('gender')} />
                      <label>{t('male')}</label>
                      <Input className='gender-input' type='radio' value='1' {...register('gender')} />
                      <label>{t('feMale')}</label>
                    </ContentField>
                  </div>
                </ContentField>
                <div className='error'>
                  <div className='mr-error'></div>
                  <div className='title-error'>{errors.gender ? t(errors.gender?.message) : ''}</div>
                </div>
              </Fields>

              {/* BirthDate */}
              <Fields>
                <ContentField>
                  <span className='content_register-focus'>
                    <CalendarOutlined className='icon' />
                    {t('birthDate')}
                  </span>
                  <Input name='birthDate' type='date' {...register('birthdate')} />
                </ContentField>
                <div className='error'>
                  <div className='mr-error'></div>
                  <div className='title-error'>{errors.date ? t(errors.date?.message) : ''}</div>
                </div>
              </Fields>

              {/* Phone Number */}
              <Fields>
                <ContentField>
                  <span className='content_register-focus'>
                    <PhoneOutlined className='icon' />
                    {t('phoneNumber')}
                    <p className='red-color'>*</p>
                  </span>
                  <Input name='phoneNumber' type='text' placeholder={t('phoneNumber')} {...register('phoneNumber')} />
                </ContentField>
                <div className='error'>
                  <div className='mr-error'></div>
                  <div className='title-error'>{errors.phoneNumber ? t(errors.phoneNumber?.message) : ''}</div>
                </div>
              </Fields>

              {/* Button Submit Register */}
              <div className='submit-register'>
                <Button className='title-input title-button'>{t('register')}</Button>
              </div>
              <div className='login-help'>
                {t('you_have_account')}
                <Link to='/login' className='ml-10'>
                  {t('login_now')}
                </Link>
              </div>
            </form>
          </ContentRegister>
        </FormRegister>
      </ScreenRegister>
    </Wrapper>
  );
}

export default RegisterScreen;
