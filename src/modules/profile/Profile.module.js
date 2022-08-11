import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Image, Typography } from 'antd';

import Info from './components/info/Info.component';
import DefaultImg from '../../assets/imgs/profile/defaultImg.png';
import { WrapperProfile } from './styled';

export default function Profile() {
  const { Title, Text } = Typography;

  const { t } = useTranslation(['profile', 'common']);

  return (
    <WrapperProfile>
      <Row>
        <Col span={22} offset={1}>
          <Row>
            <Col md={4} sm={0} xs={0}>
              <Row justify='center' align='middle'>
                <Col span={24}>
                  <Image src={DefaultImg} preview={false} alt='default img' className='avatar' />
                </Col>
                <Col span={24}>
                  <Title level={5}>{t('account_for')}</Title>
                  <Text>Phan Hữu Minh Trí</Text>
                </Col>
              </Row>
            </Col>

            <Col md={20} sm={24} xs={24}>
              <Row>
                <Title level={4}>{t('account_information')}</Title>
              </Row>
              <Info />
            </Col>
          </Row>
        </Col>
      </Row>
    </WrapperProfile>
  );
}
