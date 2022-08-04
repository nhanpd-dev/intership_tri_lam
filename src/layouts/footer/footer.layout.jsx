import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from './styled';
import { useTranslation } from 'react-i18next';
import RowContent from '../../components/rowContent';
import images from '../../assets/imgs/index';

function FooterLayout() {
  const { t } = useTranslation(['footer']);

  return (
    <Footer>
      <Col span={8} className='footer_col border_right'>
        <h2 className='content_footer'>{t('support_customer')}</h2>
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
        <h2 className='content_footer'>{t('about_us')}</h2>
        <RowContent t={t} nameRow={'about_us_tiki'} linkTo='/' />
        <RowContent t={t} nameRow={'payment_privacy_policy'} linkTo='/' />
        <RowContent t={t} nameRow={'privacy_policy_of_personal_information'} linkTo='/' />
        <RowContent t={t} nameRow={'terms_of_use'} linkTo='/' />
        <RowContent t={t} nameRow={'shipping_terms'} linkTo='/' />
      </Col>
      <Col span={8} className='footer_col'>
        <h2 className='content_footer'>{t('payment_methods')}</h2>
        <img className='footer-img-pay' src={images.tikiSvg} alt='tiki' />
        <img className='footer-img-pay' src={images.momo} alt='tiki' />
        <img className='footer-img-pay' src={images.atm} alt='atm' />
        <img className='footer-img-pay' src={images.grap} alt='grap' />
        <img className='footer-img-pay' src={images.tragop} alt='tragop' />
        <img className='footer-img-pay' src={images.viettelpay} alt='viettelpay' />
        <img className='footer-img-pay' src={images.visa} alt='visa' />
        <img className='footer-img-pay' src={images.vnpay} alt='vnpay' />
        <img className='footer-img-pay' src={images.zalopay} alt='zalopay' />
      </Col>
    </Footer>
  );
}

export default FooterLayout;
