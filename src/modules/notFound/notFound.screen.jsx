import { Col, Image, Row } from 'antd';
import React from 'react';
import { Wrapper } from './styled';

import { IMG_NOTFOUND } from '../../assets/imgs/notFound/index';

function NotFoundScreen() {
  return (
    <Wrapper>
      <Row>
        <Col span={22} offset={1}>
          <Image src={IMG_NOTFOUND} preview={false} alt='NotFound' />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default NotFoundScreen;
