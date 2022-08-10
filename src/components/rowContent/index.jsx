import { Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { Content } from './styled';

function RowContent({ linkTo, nameRow }) {
  return (
    <Content>
      <Row>
        <Link to={linkTo} className='content_sub'>
          {nameRow}
        </Link>
      </Row>
    </Content>
  );
}

export default RowContent;
