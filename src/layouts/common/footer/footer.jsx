import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Footer } from './styled';
import RowContent from '../../../components/rowContent';
import {
  IMG_MOMO,
  IMG_ATM,
  IMG_GRAP,
  IMG_TRAGOP,
  IMG_VIETTELPAY,
  IMG_VISA,
  IMG_ZALOPAY,
  IMG_VNPAY,
} from '../../../assets/imgs/layout/index';

function FooterLayout() {
  const { t } = useTranslation(['footer']);

  return (
    <Footer>
      <Col span={8} className='footer_col border_right'>
        <Typography className='content_footer'>{t('support_customer')}</Typography>
        <Row className='footer_row-1'>
          {t('hotline')}
          <Link to='/' className='content_sub'>
            <span className='phone_support'>1900-6035</span>
          </Link>
        </Row>
        <RowContent t={t} nameRow={'questions'} linkTo='/' />
        <RowContent t={t} nameRow={'send_support_request'} linkTo='/' />
        <RowContent t={t} nameRow={'ordering_guide'} linkTo='/' />
        <RowContent t={t} nameRow={'shipping_method'} linkTo='/' />
      </Col>

      <Col span={8} className='footer_col border_right'>
        <Typography className='content_footer'>{t('about_us')}</Typography>
        <RowContent t={t} nameRow={'about_us_tiki'} linkTo='/' />
        <RowContent t={t} nameRow={'payment_privacy_policy'} linkTo='/' />
        <RowContent t={t} nameRow={'privacy_policy_of_personal_information'} linkTo='/' />
        <RowContent t={t} nameRow={'terms_of_use'} linkTo='/' />
        <RowContent t={t} nameRow={'shipping_terms'} linkTo='/' />
      </Col>

      <Col span={8} className='footer_col '>
        <Typography className='content_footer'>{t('payment_methods')}</Typography>
        <Image className='footer-img-pay' src={IMG_MOMO} alt='momo' />
        <Image className='footer-img-pay' src={IMG_ATM} alt='atm' />
        <Image className='footer-img-pay' src={IMG_GRAP} alt='grap' />
        <Image className='footer-img-pay' src={IMG_TRAGOP} alt='tragop' />
        <Image className='footer-img-pay' src={IMG_VIETTELPAY} alt='viettelpay' />
        <Image className='footer-img-pay' src={IMG_VISA} alt='visa' />
        <Image className='footer-img-pay' src={IMG_VNPAY} alt='vnpay' />
        <Image className='footer-img-pay' src={IMG_ZALOPAY} alt='zalopay' />
      </Col>
    </Footer>
  );
}

export default FooterLayout;
