import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Image, Row, Typography } from 'antd';

import { Wrapper } from './styled';
import { IMG_CART } from '../../../assets/imgs/Cart/index';

function EmptyProducts({ titleContent, titleButton }) {
  const { Paragraph } = Typography;

  return (
    <Wrapper>
      <Col span={22} offset={1} className='cart'>
        <Row className='cart_content'>
          <Image className='cart_content-img' preview={false} src={IMG_CART} alt='hhee' />
        </Row>
        <Row className='cart_content'>
          <Paragraph className='cart_content-title'>{titleContent}</Paragraph>
        </Row>
        <Row className='cart_content'>
          <Link to='/'>
            <Button className='cart_content-button'>{titleButton}</Button>
          </Link>
        </Row>
      </Col>
    </Wrapper>
  );
}

export default EmptyProducts;
