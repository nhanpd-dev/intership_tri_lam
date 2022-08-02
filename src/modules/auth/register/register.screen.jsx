/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import LogoRegister from '../../../assets/imgs/logo.png';
import { Wrapper } from './styled';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    MailOutlined,
    LockOutlined,
    UserOutlined,
    ManOutlined,
    CalendarOutlined,
    PhoneOutlined,
} from '@ant-design/icons';

function RegisterScreen() {
    const [checkGender, setCheckGender] = useState('nam');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log(data);
    };

    const { t } = useTranslation(['register']);

    return (
        <Wrapper>
            <section>
                <div className="imgBx">
                    <img src={LogoRegister} alt="banner" />
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <h2>{t('register')}</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputBx">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>
                                        <MailOutlined style={{ marginRight: 10 }} />
                                        Email<p style={{ color: 'red' }}>*</p>
                                    </span>
                                    <input name="email" type="text" {...register('email')} placeholder="Email" />
                                </div>

                                <div className="error">{errors.email ? t(errors.email?.message) : ''}</div>
                            </div>
                            <div className="inputBx">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>
                                        <LockOutlined style={{ marginRight: 10 }} />
                                        {t('password')}
                                        <p style={{ color: 'red' }}>*</p>
                                    </span>
                                    <input
                                        className="title-input"
                                        name="passsword"
                                        type="password"
                                        {...register('password')}
                                        placeholder={t('password')}
                                    />{' '}
                                </div>

                                <div className="error">{errors.password ? t(errors.password?.message) : ''}</div>
                            </div>
                            <div className="inputBx">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>
                                        <UserOutlined style={{ marginRight: 10 }} />
                                        {t('fullName')}
                                        <p style={{ color: 'red' }}>*</p>
                                    </span>
                                    <input
                                        className="title-input"
                                        name="fullname"
                                        type="text"
                                        {...register('fullname')}
                                        placeholder={t('fullName')}
                                    />
                                </div>

                                <div className="error">{errors.fullname ? t(errors.fullname?.message) : ''}</div>
                            </div>
                            <div className="inputBx">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>
                                        <ManOutlined style={{ marginRight: 10 }} />
                                        {t('gender')}
                                        <p style={{ color: 'red' }}>*</p>
                                    </span>
                                    <div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <input
                                                className="gender-input"
                                                {...register('gender')}
                                                type="radio"
                                                name="gender"
                                                value="nam"
                                                onChange={(e) => setCheckGender(e.target.value)}
                                                checked={checkGender === 'nam'}
                                            />
                                            <label htmlFor="Nam">{t('male')}</label>

                                            <input
                                                className="gender-input"
                                                type="radio"
                                                {...register('gender')}
                                                value="nu"
                                                onChange={(e) => setCheckGender(e.target.value)}
                                                checked={checkGender === 'nu'}
                                            />
                                            <label htmlFor="Nu">{t('feMale')}</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="error">{errors.gender ? t(errors.gender?.message) : ''}</div>
                            </div>
                            <div className="inputBx">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>
                                        <CalendarOutlined style={{ marginRight: 10 }} />
                                        {t('date')}
                                        <p style={{ color: 'red' }}>*</p>
                                    </span>
                                    <input className="title-input" name="date" type="date" {...register('date')} />
                                </div>

                                <div className="error">{errors.date ? t(errors.date?.message) : ''}</div>
                            </div>
                            <div className="inputBx">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span>
                                        <PhoneOutlined style={{ marginRight: 10 }} />
                                        {t('numberPhone')}
                                        <p style={{ color: 'red' }}>*</p>
                                    </span>
                                    <input
                                        className="title-input"
                                        name="phonenumber"
                                        type="text"
                                        {...register('phonenumber')}
                                        placeholder={t('numberPhone')}
                                    />
                                </div>

                                <div className="error">{errors.phonenumber ? t(errors.phonenumber?.message) : ''}</div>
                            </div>
                            <div className="inputBx" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <input type="submit" value={t('register')} />
                            </div>
                            <div className="inputBx" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {t('haveAccount')}
                                <Link style={{ marginLeft: 4 }} to="/login">
                                    {t('loginNow')}
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default RegisterScreen;
