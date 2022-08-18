import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Image, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './styled';
import { IMG_CART } from '../../../assets/imgs/Cart/index';

function EmptyProducts() {
  const { t } = useTranslation(['cart']);

  const { Paragraph } = Typography;

  return (
    <Wrapper>
      <Col span={22} offset={1} className='cart'>
        <Row className='cart_content'>
          <Image className='cart_content-img' preview={false} src={IMG_CART} alt='hhee' />
        </Row>
        <Row className='cart_content'>
          <Paragraph className='cart_content-title'>{t('there_are_no_products_in_the_cart')}</Paragraph>
        </Row>
        <Row className='cart_content'>
          <Link to='#'>
            <Button className='cart_content-button'>{t('continue_to_buy_products')}</Button>
          </Link>
        </Row>
      </Col>
    </Wrapper>
  );
}

export default EmptyProducts;
