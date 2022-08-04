/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { CaretUpOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { AuthAndCart } from './styled';
import RowContent from '../../components/rowContent';

function AuthLayout() {
  const { t } = useTranslation(['header', 'register']);

  const [testLogin, setTestLogin] = useState(true);

  return (
    <AuthAndCart className='auth_cart'>
      <Col className='auth'>
        <Col>
          <UserOutlined className='icon_auth' />
        </Col>
        {testLogin ? (
          <>
            <Col className='register_login'>
              <Row>Tai khoan</Row>
              <Row>Le Quang Bao Lam</Row>
            </Col>
            <div className='user_infor'>
              <RowContent t={t} nameRow={'Thông tin tài khoản'} linkTo='/' />
              <RowContent t={t} nameRow={'Thông báo của tôi'} linkTo='/' />
              <RowContent t={t} nameRow={'Đơn hàng của tôi'} linkTo='/' />
              <RowContent t={t} nameRow={'Nhận xét sản phẩm đã mua'} linkTo='/' />
              <RowContent t={t} nameRow={'Đăng xuất'} linkTo='/' />
              <CaretUpOutlined className='icon_user-up' />
            </div>
          </>
        ) : (
          <Col className='register_login'>
            <Row>
              <Link className='is_login' to='/login'>
                {t('signIn')}
              </Link>
            </Row>
            <Row>
              <Link className='is_login' to='/register'>
                {t('register:signUp')}
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
