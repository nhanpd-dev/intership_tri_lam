import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

function ListItem({ t, linkTo, imgItem, nameItem }) {
  return (
    <Col sm={4} xs={8}>
      <Link to={linkTo} className='list_item-content item_content-img'>
        <Row>
          <img className='img_selector' src={imgItem} alt={t(nameItem)} />
        </Row>
      </Link>
      <Link to='/' className='list_item-content item_content-title'>
        {t(nameItem)}
      </Link>
    </Col>
  );
}

export default ListItem;
