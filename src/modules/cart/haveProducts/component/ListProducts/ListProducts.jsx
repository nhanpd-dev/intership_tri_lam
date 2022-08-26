/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Col, Image, InputNumber, Popconfirm, Row, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

import { useProductStore } from '../../../../../hooks/useProductDetail';
import { Wrapper } from './styled';

function ListProducts({ img, linkTo, nameProducts, price, productId, discount, quantity, isCheck }) {
  const { Text } = Typography;

  const { deleteToCart, changeToCart } = useProductStore();

  const itemPrice = useMemo(() => {
    const total = quantity * price - quantity * price * discount;

    return total;
  }, [quantity]);

  const changeCheck = (e) => {
    changeToCart({ isChecked: e.target.checked, id: productId, quantity: quantity });
  };

  const changeQuantity = (value) => {
    changeToCart({ quantity: value, id: productId, isChecked: true });
  };

  const confirmDelete = () => {
    deleteToCart(productId);
  };

  return (
    <Wrapper>
      <Row className='list_products-content'>
        <Col md={13} sm={14} xs={24} className='info_product'>
          <Checkbox className='icon_check' onChange={changeCheck} checked={isCheck} />
          <Image className='img_product' preview={false} src={img} alt='anh' />
          <Link className='name_product' to={`/product-detail/${productId}`}>
            {nameProducts}
          </Link>
        </Col>
        <Col md={3} className='selector_price unit_price'>
          {price}đ
          <Row>
            <Text type='danger'>-{discount * 100}%</Text>
          </Row>
        </Col>
        <Col md={4} sm={4} xs={8}>
          <InputNumber min={0} max={1000} disabled={!isCheck} defaultValue={quantity} onChange={changeQuantity} />
        </Col>
        <Col md={3} sm={5} xs={8} className='selector_price red_color'>
          {itemPrice}đ
        </Col>
        <Col md={1} sm={1} xs={8}>
          <Popconfirm title='Do you want to delete?' okText='Yes' cancelText='No' onConfirm={confirmDelete}>
            <DeleteOutlined className='icon_delete' />
          </Popconfirm>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default ListProducts;
