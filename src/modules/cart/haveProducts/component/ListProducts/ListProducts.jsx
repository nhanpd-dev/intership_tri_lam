import React from 'react';
import { Checkbox, Col, Image, InputNumber, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function ListProducts({ img, linkTo, nameProducts, price }) {
  return (
    <Row className='list_products-content'>
      <Col span={10}>
        <Checkbox className='icon_check' />
        <Image preview={false} src={img} alt='anh' />
        <Link to={linkTo}>{nameProducts}</Link>
      </Col>
      <Col span={5} className='selector_price'>
        {price}
      </Col>
      <Col span={4}>
        <InputNumber min={1} max={10} defaultValue={3} />
      </Col>
      <Col span={4} className='selector_price red_color'>
        {price}
      </Col>
      <Col span={1}>
        <DeleteOutlined className='icon_delete' />
      </Col>
    </Row>
  );
}

export default ListProducts;
