import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Col, Image, InputNumber, Popconfirm, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function ListProducts({ img, linkTo, nameProducts, price, totalPrice, setTotalPrice }) {
  const [intoMoney, setIntoMoney] = useState(price);

  const changeQuantity = (value) => {
    const sum = value * price;
    setIntoMoney(sum);
  };

  return (
    <Row className='list_products-content'>
      <Col md={11} sm={14} xs={24}>
        <Checkbox
          className='icon_check'
          onChange={(e) => {
            if (e.target.checked) {
              setTotalPrice(totalPrice + intoMoney);
            } else {
              setTotalPrice(totalPrice - intoMoney);
            }
          }}
        />
        <Image preview={false} src={img} alt='anh' />
        <Link to={linkTo}>{nameProducts}</Link>
      </Col>
      <Col md={4} className='selector_price unit_price'>
        {price}
      </Col>
      <Col md={4} sm={4} xs={8}>
        <InputNumber min={1} max={10} defaultValue={1} onChange={changeQuantity} />
      </Col>
      <Col md={4} sm={5} xs={8} className='selector_price red_color'>
        {intoMoney}
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
