import React from 'react';
import { Col, Image, Row } from 'antd';

import { IMG_NOTFOUND } from '../../assets/imgs/notFound/index';
import { Wrapper } from './styled';

function NotFoundScreen() {
  return (
    <Wrapper>
      <Row>
        <Col md={22} offset={1}>
          <Row>
            <Image src={IMG_NOTFOUND} preview={false} />
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default NotFoundScreen;
