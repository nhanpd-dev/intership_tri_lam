import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { useProductStore } from '../../../hooks/useProductDetail';

function CartLayout() {
  const { quantityCart } = useProductStore();

  return (
    <Link to='/cart' className='cart'>
      <Col className='cart_items'>
        <ShoppingCartOutlined />
        <Col>
          <Typography className='title_cart cart_quantily'>{quantityCart}</Typography>
        </Col>
      </Col>
    </Link>
  );
}

export default CartLayout;
