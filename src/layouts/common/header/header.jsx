import { Button, Input, Row } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { Header, Logo, Search } from './styled';
import AuthLayout from '../authCart/authCart';
import { IMG_FREESHIP, LOGO_TIKI } from '../../../assets/imgs/layout/index';

function HeaderLayout() {
  const { t } = useTranslation(['header', 'register']);

  return (
    <Header>
      <Row id='header_layout'>
        <Logo>
          <div className='logo_tiki'>
            <img className='logo_tiki-img' src={LOGO_TIKI} alt='Tiki' />
            <img className='logo_freeship-img' src={IMG_FREESHIP} alt='Tiki' />
          </div>
        </Logo>

        <Search className='search'>
          <Input className='search_input' placeholder={t('title_input_search_header')} />
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