/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import {
  AlertOutlined,
  AuditOutlined,
  CaretUpOutlined,
  LikeOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import RowContent from '../../components/rowContent';
import { AuthAndCart } from './styled';

function AuthLayout() {
  const { t } = useTranslation(['header', 'register']);

  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthAndCart className='auth_cart'>
      <Col className='auth'>
        <Col>
          <UserOutlined className='icon_auth' />
        </Col>
        {isLogin ? (
          <>
            <Col className='register_login'>
              <Row>{t('account')}</Row>
              <Row>Le Quang Bao Lam</Row>
            </Col>
            <div className='user_infor'>
              <Row className='text_user-infor'>
                <AuditOutlined className='icon_user-infor' />
                <RowContent t={t} nameRow={'account_nformation'} linkTo='/' />
              </Row>
              <Row className='text_user-infor'>
                <AlertOutlined className='icon_user-infor' />
                <RowContent t={t} nameRow={'my_notification'} linkTo='/' />
              </Row>
              <Row className='text_user-infor'>
                <ShoppingOutlined className='icon_user-infor' />
                <RowContent t={t} nameRow={'my_oder'} linkTo='/' />
              </Row>
              <Row className='text_user-infor'>
                <LikeOutlined className='icon_user-infor' />
                <RowContent t={t} nameRow={'review_products'} linkTo='/' />
              </Row>
              <Row className='text_user-infor'>
                <LogoutOutlined className='icon_user-infor' />
                <RowContent t={t} nameRow={'sign_out'} linkTo='/login' />
              </Row>

              <CaretUpOutlined className='icon_user-up' />
            </div>
          </>
        ) : (
          <Col className='register_login'>
            <Row>
              <Link className='is_login' to='/login'>
                {t('sign_in')}
              </Link>
            </Row>
            <Row>
              <Link className='is_login' to='/register'>
                {t('register:sign_up')}
              </Link>
            </Row>
          </Col>
        )}
      </Col>
      <Link to='/' className='cart'>
        <Col className='cart_items'>
          <ShoppingCartOutlined />
          <Col>
            <div className='title_cart cart_quantily'>0</div>
            <p className='title_cart mt-20'>{t('cart')}</p>
          </Col>
        </Col>
      </Link>
    </AuthAndCart>
  );
}

export default AuthLayout;
