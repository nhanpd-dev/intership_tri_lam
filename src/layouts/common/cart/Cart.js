import { ShoppingCartOutlined } from '@ant-design/icons';
import { Col, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function CartLayout() {
  const { t } = useTranslation(['header', 'register']);

  return (
    <Link to='/cart' className='cart'>
      <Col className='cart_items'>
        <ShoppingCartOutlined />
        <Col>
          <Typography className='title_cart cart_quantily'>0</Typography>
        </Col>
      </Col>
    </Link>
  );
}

export default CartLayout;
