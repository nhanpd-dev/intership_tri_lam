import React from 'react';
import { Row, Col, Image } from 'antd';

import Info from './components/info/Info.component';
import DefaultImg from '../../assets/imgs/profile/defaultImg.png';
import { WrapperProfile } from './styled';

export default function Profile() {
  return (
    <WrapperProfile>
      <Row>
        <Col span={4} offset={2}>
          <Row justify='center' align='middle'>
            <Col span={24}>
              <Image src={DefaultImg} alt='default img' className='avatar' />
            </Col>
            <Col span={24}>
              <p>Tài khoản của</p>
              <h4>Phan Hữu Minh Trí</h4>
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <Row>
            <h2>Thông tin tài khoản</h2>
          </Row>
          <Info />
        </Col>
      </Row>
    </WrapperProfile>
  );
}
