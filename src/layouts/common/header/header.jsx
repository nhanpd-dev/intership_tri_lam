import React from 'react';
import { Col, Image, Input, Row } from 'antd';
import { AppstoreOutlined, CommentOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Header } from './styled';
import UserLayout from '../user/user';
import Navbar from './component.navbar';
import { IMG_FREESHIP, LOGO_TIKI } from '../../../assets/imgs/layout/index';

function HeaderLayout() {
  const { t } = useTranslation(['header', 'register', 'common']);

  const { Search } = Input;

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

  return (
    <Header>
      <Row className='header_layout'>
        <Col span={22} offset={1}>
          <Row className='header_layout-content'>
            {/* Logo */}
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

            {/* Search */}
            <Col md={12} sm={20} xs={17}>
              <Search placeholder='input search text' allowClear enterButton='Search' size='large' />
            </Col>

            {/* AuthCart */}
            <Col md={7}>
              <UserLayout />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Nav */}
      <Row className='header_layout-nav'>
        <Col span={22} offset={1}>
          <Row>{renderNavItems()}</Row>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderLayout;
