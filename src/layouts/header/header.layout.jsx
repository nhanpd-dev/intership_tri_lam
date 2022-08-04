import { Button, Input, Row } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import { Header, Logo, Search } from './styled';
import { useTranslation } from 'react-i18next';
import AuthLayout from '../auth.layout/auth.layout';
import images from '../../assets/imgs';

function HeaderLayout() {
  const { t } = useTranslation(['header', 'register']);

  return (
    <Header>
      <Row id='header_layout'>
        <Logo>
          <div className='logo_tiki'>
            <img className='logo_tiki-img' src={images.logoTiki} alt='Tiki' />
            <img className='logo_freeship-img' src={images.imgFreship} alt='Tiki' />
          </div>
        </Logo>

        <Search className='search'>
          <Input className='search_input' placeholder={t('title_input_search_header')}></Input>
          <Button className='search_btn'>
            <SearchOutlined />
            {t('search')}
          </Button>
        </Search>

        <AuthLayout />
      </Row>
    </Header>
  );
}

export default HeaderLayout;
