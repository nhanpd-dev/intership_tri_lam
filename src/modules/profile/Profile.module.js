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
        <Col span={4} offset={2}>
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
        <Col span={16}>
          <Row>
            <Title level={4}>{t('account_information')}</Title>
          </Row>
          <Info t={t} />
        </Col>
      </Row>
    </WrapperProfile>
  );
}
