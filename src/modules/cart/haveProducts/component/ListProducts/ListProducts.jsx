/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Col, Image, InputNumber, Popconfirm, Row, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

import { useProductStore } from '../../../../../hooks/useProductDetail';

function ListProducts({ img, linkTo, nameProducts, price, productId, discount, orders, setOrders, quantity, isCheck }) {
  const { Text } = Typography;

  const { deleteToCart } = useProductStore();

  const itemPrice = useMemo(() => {
    const total = quantity * price - quantity * price * discount;

    return total;
  }, [quantity]);

  const changeCheck = (e) => {
    const newOrders = [...orders];

    const indexProduct = newOrders.findIndex((item) => item.productId === productId);

    if (indexProduct >= 0) {
      newOrders[indexProduct].isCheck = e.target.checked;
    }

    setOrders(newOrders);
  };

  const changeQuantity = (value) => {
    const newOrders = [...orders];

    const indexProduct = newOrders.findIndex((item) => item.productId === productId);

    if (indexProduct >= 0) {
      newOrders[indexProduct].quantity = value;
    }

    setOrders(newOrders);
  };

  const confirmDelete = () => {
    const findProductDelete = orders.find((product) => product.productId === productId);

    deleteToCart(findProductDelete);

    const remainingOrder = orders.filter((product) => product.productId !== productId);

    setOrders(remainingOrder);
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
        <Popconfirm title='Do you want to delete?' okText='Yes' cancelText='No' onConfirm={confirmDelete}>
          <DeleteOutlined className='icon_delete' />
        </Popconfirm>
      </Col>
    </Row>
  );
}

export default ListProducts;
