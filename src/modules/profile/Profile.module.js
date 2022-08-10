import React from 'react';
import { Row, Col, Image, Typography } from 'antd';

import Info from './components/info/Info.component';
import DefaultImg from '../../assets/imgs/profile/defaultImg.png';
import { WrapperProfile } from './styled';

export default function Profile() {
  const { Title } = Typography;

  return (
    <WrapperProfile>
      <Row>
        <Col span={4} offset={2}>
          <Row justify='center' align='middle'>
            <Col span={24}>
              <Image src={DefaultImg} alt='default img' className='avatar' />
            </Col>
            <Col span={24}>
              <Title level={5}>Tài khoản của</Title>
              <Title level={5}>Phan Hữu Minh Trí</Title>
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <Row>
            <Title level={4}>Thông tin tài khoản</Title>
          </Row>
          <Info />
        </Col>
      </Row>
    </WrapperProfile>
  );
}
