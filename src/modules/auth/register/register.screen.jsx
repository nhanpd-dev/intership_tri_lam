import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  ManOutlined,
  CalendarOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { schema } from './schema';
import LogoRegister from '../../../assets/imgs/logo.png';
import { Button, ContentField, ContentRegister, Fields, FormRegister, Input, ScreenRegister, Wrapper } from './styled';

function RegisterScreen() {
  const { t } = useTranslation(['register']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <ScreenRegister>
        <div className="logo-register">
          <img src={LogoRegister} alt="banner" />
        </div>
        <FormRegister>
          <ContentRegister>
            <h2>{t('register')}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <Fields>
                <ContentField>
                  <span>
                    <MailOutlined className="icon" />
                    {t('email')}
                    <p className="red-color">*</p>
                  </span>
                  <Input name="email" type="text" placeholder="Email" {...register('email')} />
                </ContentField>
                <div className="error">{errors.email ? t(errors.email?.message) : ''}</div>
              </Fields>

              {/* Password */}
              <Fields>
                <ContentField>
                  <span>
                    <LockOutlined className="icon" />
                    {t('password')}
                    <p className="red-color">*</p>
                  </span>
                  <Input name="passsword" type="password" placeholder={t('password')} {...register('password')} />
                </ContentField>
                <div className="error">{errors.password ? t(errors.password?.message) : ''}</div>
              </Fields>

              {/* Full Name */}
              <Fields>
                <ContentField>
                  <span>
                    <UserOutlined className="icon" />
                    {t('fullName')}
                    <p className="red-color">*</p>
                  </span>
                  <Input name="fullname" type="text" placeholder={t('fullName')} {...register('fullname')} />
                </ContentField>

                <div className="error">{errors.fullname ? t(errors.fullname?.message) : ''}</div>
              </Fields>

              {/* Gender */}
              <Fields>
                <ContentField>
                  <span>
                    <ManOutlined className="icon" />
                    {t('gender')}
                    <p className="red-color">*</p>
                  </span>
                  <div>
                    <ContentField>
                      <Input
                        className="gender-input"
                        type="radio"
                        name="gender"
                        value="nam"
                        checked
                        {...register('gender')}
                      />
                      <label>{t('male')}</label>

                      <Input className="gender-input" type="radio" value="nu" {...register('gender')} />
                      <label>{t('feMale')}</label>
                    </ContentField>
                  </div>
                </ContentField>
                <div className="error">{errors.gender ? t(errors.gender?.message) : ''}</div>
              </Fields>

              {/* BirthDate */}
              <Fields>
                <ContentField>
                  <span>
                    <CalendarOutlined className="icon" />
                    {t('birthDate')}
                  </span>
                  <Input name="birthDate" type="date" {...register('birthDate')} />
                </ContentField>
                <div className="error">{errors.date ? t(errors.date?.message) : ''}</div>
              </Fields>

              {/* Phone Number */}
              <Fields>
                <ContentField>
                  <span>
                    <PhoneOutlined className="icon" />
                    {t('numberPhone')}
                    <p className="red-color">*</p>
                  </span>
                  <Input name="phonenumber" type="text" placeholder={t('numberPhone')} {...register('phonenumber')} />
                </ContentField>
                <div className="error">{errors.phonenumber ? t(errors.phonenumber?.message) : ''}</div>
              </Fields>

              {/* Button Submit Register */}
              <div className=" flex-end">
                <Button className="title-input title-button">{t('register')}</Button>
              </div>
              <div className=" flex-end">
                {t('you_have_account')}
                <Link to="/login">{t('login_now')}</Link>
              </div>
            </form>
          </ContentRegister>
        </FormRegister>
      </ScreenRegister>
    </Wrapper>
  );
}

export default RegisterScreen;
