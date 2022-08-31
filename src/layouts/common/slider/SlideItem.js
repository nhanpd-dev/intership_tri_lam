import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, Row } from 'antd';

function ListItem({ linkTo, imgItem, nameItem }) {
  return (
    <Col className='list_item'>
      <Link to={linkTo} className='list_item-content'>
        {nameItem}
      </Link>
    </Col>
  );
}

export default ListItem;
