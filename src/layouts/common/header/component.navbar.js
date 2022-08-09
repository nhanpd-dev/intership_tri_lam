import { Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ t, linkTo, icon, nameNav }) {
  return (
    <Link to={linkTo}>
      <Row className='layout_nav-icon'>{icon}</Row>
      <Row className='layout_nav-title'>{t(nameNav)}</Row>
    </Link>
  );
}

export default Navbar;
