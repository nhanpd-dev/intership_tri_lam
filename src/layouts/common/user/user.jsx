/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import {
  AlertOutlined,
  AuditOutlined,
  CaretUpOutlined,
  LikeOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import RowContent from '../../../components/rowContent';
import { AuthAndCart } from './styled';
import CartLayout from '../cart/Cart';
import { useAuthStore } from '../../../hooks/useAuth';

function UserItem() {
  const { t } = useTranslation(['header', 'register']);

  const { auth, currentUser } = useAuthStore();

  return (
    <AuthAndCart className='auth_cart'>
      <Col className='auth'>
        <Col>
          <UserOutlined className='icon_auth' />
        </Col>
        {auth ? (
          <>
            <Col className='register_login'>
              <Row>{t('account')}</Row>
              <Row>{currentUser.userName ? currentUser.userName : t('header:empty_name')}</Row>
            </Col>
            <div className='user_infor'>
              <Row className='text_user-infor'>
                <AuditOutlined className='icon_user-infor' />
                <RowContent nameRow={t('account_information')} linkTo='/account/profile' />
              </Row>
              <Row className='text_user-infor'>
                <AlertOutlined className='icon_user-infor' />
                <RowContent nameRow={t('my_notification')} linkTo='#' />
              </Row>
              <Row className='text_user-infor'>
                <ShoppingOutlined className='icon_user-infor' />
                <RowContent nameRow={t('my_oder')} linkTo='#' />
              </Row>
              <Row className='text_user-infor'>
                <LikeOutlined className='icon_user-infor' />
                <RowContent nameRow={t('review_products')} linkTo='#' />
              </Row>
              <Row className='text_user-infor'>
                <LogoutOutlined className='icon_user-infor' />
                <RowContent nameRow={t('sign_out')} linkTo='/login' />
              </Row>

              <CaretUpOutlined className='icon_user-up' />
            </div>
          </>
        ) : (
          <Col className='register_login'>
            <Row>
              <Link className='is_login' to='/login'>
                {t('login:sign_in')}
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
      <CartLayout />
    </AuthAndCart>
  );
}

export default UserItem;
