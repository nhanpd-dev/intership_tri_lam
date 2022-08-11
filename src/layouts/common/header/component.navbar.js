import { Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ linkTo, icon, title }) {
  return (
    <Link to={linkTo}>
      <Row className='layout_nav-icon'>{icon}</Row>
      <Row className='layout_nav-title'>{title}</Row>
    </Link>
  );
}

export default Navbar;
