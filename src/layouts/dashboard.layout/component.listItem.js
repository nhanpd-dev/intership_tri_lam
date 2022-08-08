import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({ t, linkTo, imgItem, nameItem }) {
  return (
    <Col>
      <Col className='slide_content'>
        <Row className='slide_content-img'>
          <Link to={linkTo}>
            <img className='content_img-selection' src={imgItem} alt={t(nameItem)} />
          </Link>
        </Row>
      </Col>
      <Link className='content_title' to={linkTo}>
        {t(nameItem)}
      </Link>
    </Col>
  );
}

export default ListItem;
