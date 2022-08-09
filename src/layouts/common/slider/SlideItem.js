import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

function ListItem({ t, linkTo, imgItem, nameItem }) {
  return (
    <Col className='slide_content'>
      <Row className='slide_content-img'>
        <Link to={linkTo}>
          <img className='content_img-selection' src={imgItem} alt={t(nameItem)} />
        </Link>
      </Row>
      <Link className='content_title' to={linkTo}>
        <Row>{t(nameItem)}</Row>
      </Link>
    </Col>
  );
}

export default ListItem;
