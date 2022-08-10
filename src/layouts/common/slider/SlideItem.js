import React from 'react';
import { Col, Image, Row } from 'antd';
import { Link } from 'react-router-dom';

function ListItem({ linkTo, imgItem, nameItem }) {
  return (
    <Col className='list_item'>
      <Link to={linkTo} className='list_item-content item_content-img'>
        <Row>
          <Image className='img_selector' src={imgItem} alt={nameItem} />
        </Row>
      </Link>
      <Link to='/' className='list_item-content item_content-title'>
        {nameItem}
      </Link>
    </Col>
  );
}

export default ListItem;
