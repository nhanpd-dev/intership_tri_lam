/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Col, Image, InputNumber, Popconfirm, Row, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

function ListProducts({ img, linkTo, nameProducts, price, productId, discount, cart, setCart, quantity, isCheck }) {
  const { Text } = Typography;

  const itemPrice = useMemo(() => {
    const total = quantity * price - quantity * price * discount;
    return total;
  }, [quantity]);

  const changeCheck = (e) => {
    const newCart = [...cart];

    const indexProduct = newCart.findIndex((item) => item.productId === productId);

    if (indexProduct >= 0) {
      newCart[indexProduct].isCheck = e.target.checked;
    }

    setCart(newCart);
  };

  const changeQuantity = (value) => {
    const newCart = [...cart];

    const indexProduct = newCart.findIndex((item) => item.productId === productId);

    if (indexProduct >= 0) {
      newCart[indexProduct].quantity = value;
    }

    setCart(newCart);
  };

  return (
    <Row className='list_products-content'>
      <Col md={11} sm={14} xs={24}>
        <Checkbox className='icon_check' onChange={changeCheck} />
        <Image preview={false} src={img} alt='anh' />
        <Link to={linkTo}>{nameProducts}</Link>
      </Col>
      <Col md={4} className='selector_price unit_price'>
        {price}đ
        <Row>
          <Text type='danger'>-{discount * 100}%</Text>
        </Row>
      </Col>
      <Col md={4} sm={4} xs={8}>
        <InputNumber min={1} max={10} disabled={!isCheck} defaultValue={quantity} onChange={changeQuantity} />
      </Col>
      <Col md={4} sm={5} xs={8} className='selector_price red_color'>
        {itemPrice}đ
      </Col>
      <Col md={1} sm={1} xs={8}>
        <Popconfirm title='Do you want to delete?' okText='Yes' cancelText='No'>
          <DeleteOutlined className='icon_delete' />
        </Popconfirm>
      </Col>
    </Row>
  );
}

export default ListProducts;
