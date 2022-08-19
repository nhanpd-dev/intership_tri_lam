/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Image, Row, Button } from 'antd';
import {
  AppstoreOutlined,
  CommentOutlined,
  HomeOutlined,
  UserOutlined,
  SearchOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useProductsListStore } from '../../../modules/products/useProductsList';
import { Header } from './styled';
import UserLayout from '../user/user';
import Navbar from './component.navbar';
import { IMG_FREESHIP, LOGO_TIKI } from '../../../assets/imgs/layout/index';

function HeaderLayout() {
  const { fetchProductsFunc, setParams, params } = useProductsListStore();

  const { watch, register } = useForm();
  const searchData = watch('search');

  const { t } = useTranslation(['header', 'register', 'common']);

  const navItems = [
    { span: 6, linkTo: '#', icon: <HomeOutlined />, title: t('common:home') },
    { span: 6, linkTo: '#', icon: <AppstoreOutlined />, title: t('header:category') },
    { span: 6, linkTo: '#', icon: <CommentOutlined />, title: t('header:chat') },
    { span: 6, linkTo: '#', icon: <UserOutlined />, title: t('header:personal') },
  ];

  const renderNavItems = () => {
    const listNavItems = [];

    navItems.forEach((item, index) =>
      listNavItems.push(
        <Col key={index} span={item.span}>
          <Navbar linkTo={item.linkTo} icon={item.icon} title={item.title} />
        </Col>,
      ),
    );

    return listNavItems;
  };

  useEffect(() => {
    const newParams = { ...params, search: searchData };
    setParams(newParams);
    fetchProductsFunc();
  }, [searchData]);

  return (
    <Header>
      <Row className='header_layout'>
        <Col span={22} offset={1}>
          <Row className='header_layout-content'>
            <Col md={5} sm={4} xs={6}>
              <Row className='header_layout-img'>
                <Link to='/'>
                  <Image preview={false} className='layout_img-selector' src={LOGO_TIKI} alt='Tiki' />
                </Link>
              </Row>
              <Link to='#'>
                <Image preview={false} className='layout_img-selector' src={IMG_FREESHIP} alt='Tiki' />
              </Link>
            </Col>

            <Col md={12} sm={20} xs={17}>
              <Row className='search'>
                <Col md={20} sm={22} xs={22}>
                  <input
                    className='ant-input'
                    placeholder={t('header:title_input_search_header')}
                    size='large'
                    {...register('search')}
                  />
                </Col>
                <Col md={2} sm={2} xs={2}>
                  <Button
                    icon={<SearchOutlined />}
                    onClick={() => {
                      fetchProductsFunc(params);
                    }}
                  >
                    {t('header:search')}
                  </Button>
                </Col>
                <Row className='login_signUp'>
                  <LoginOutlined />
                  <Link className='login_selector' to='/login'>
                    {t('register:login_now')}
                  </Link>
                  <Link className='signUp_selector' to='/signUp'>
                    {t('register:sign_up')}
                  </Link>
                </Row>
              </Row>
            </Col>

            <Col md={7}>
              <UserLayout />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className='header_layout-nav'>
        <Col span={22} offset={1}>
          <Row>{renderNavItems()}</Row>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderLayout;
