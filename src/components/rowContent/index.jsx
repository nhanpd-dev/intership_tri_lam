import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';

import { Content } from './styled';

function RowContent({ linkTo, nameRow, redirectFunction }) {
  return (
    <Content>
      <Row>
        <Link onClick={redirectFunction} to={linkTo} className='content_sub'>
          {nameRow}
        </Link>
      </Row>
    </Content>
  );
}

export default RowContent;
