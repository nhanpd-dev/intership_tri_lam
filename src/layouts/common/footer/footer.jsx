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

  const rowContentSupportCustomer = [
    { nameRow: t('about_us_tiki'), linkTo: '#' },
    { nameRow: t('questions'), linkTo: '#' },
    { nameRow: t('send_support_request'), linkTo: '#' },
    { nameRow: t('shipping_method'), linkTo: '#' },
  ];

  const renderRowContentSupportCustomer = () => {
    const List = [];

    rowContentSupportCustomer.forEach((item, index) =>
      List.push(<RowContent key={index} linkTo={item.linkTo} nameRow={item.nameRow} />),
    );

    return List;
  };

  const rowContentAboutUs = [
    { nameRow: t('about_us_tiki'), linkTo: '#' },
    { nameRow: t('payment_privacy_policy'), linkTo: '#' },
    { nameRow: t('privacy_policy_of_personal_information'), linkTo: '#' },
    { nameRow: t('terms_of_use'), linkTo: '#' },
    { nameRow: t('shipping_terms'), linkTo: '#' },
  ];

  const renderRowContentAboutUs = () => {
    const List = [];

    rowContentAboutUs.forEach((item, index) =>
      List.push(<RowContent key={index} linkTo={item.linkTo} nameRow={item.nameRow} />),
    );

    return List;
  };

  const imgItems = [
    { src: IMG_MOMO, alt: 'momo' },
    { src: IMG_ATM, alt: 'atm' },
    { src: IMG_GRAP, alt: 'grap' },
    { src: IMG_TRAGOP, alt: 'tragop' },
    { src: IMG_VIETTELPAY, alt: 'viettelpay' },
    { src: IMG_VISA, alt: 'visa' },
    { src: IMG_VNPAY, alt: 'vnpay' },
    { src: IMG_ZALOPAY, alt: 'zalopay' },
  ];

  const renderImgItems = () => {
    const List = [];

    imgItems.forEach((item, index) => List.push(<Image preview={false} key={index} src={item.src} alt={item.alt} />));

    return List;
  };

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
        {renderRowContentSupportCustomer()}
      </Col>

      <Col span={8} className='footer_col border_right'>
        <Typography className='content_footer'>{t('about_us')}</Typography>
        {renderRowContentAboutUs()}
      </Col>

      <Col span={8} className='footer_col '>
        <Typography className='content_footer'>{t('payment_methods')}</Typography>
        {renderImgItems()}
      </Col>
    </Footer>
  );
}

export default FooterLayout;
