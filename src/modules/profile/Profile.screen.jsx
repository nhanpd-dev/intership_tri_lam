/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Image, Typography, Skeleton } from 'antd';

import { useAuthStore } from '../../hooks/useAuth';
import DefaultImg from '../../assets/imgs/profile/defaultImg.png';
import { WrapperProfile } from './styled';

export default function Profile({ children }) {
  const { Title, Text } = Typography;

  const { t } = useTranslation(['profile', 'common']);

  const { currentUser, isLoading } = useAuthStore();

  return (
    <WrapperProfile>
      <Row>
        <Col span={22} offset={1}>
          <Row>
            <Col md={4} sm={0} xs={0}>
              <Row justify='center' align='middle'>
                <Skeleton avatar paragraph={{ rows: 2 }} loading={isLoading} active>
                  <Col span={24}>
                    <Image
                      src={currentUser?.avatar ? currentUser.avatar : DefaultImg}
                      preview={false}
                      alt='Avatar'
                      className='avatar'
                    />
                  </Col>
                  <Col span={24}>
                    <Title level={5}>{t('account_for')}</Title>
                    <Text>{currentUser?.username}</Text>
                  </Col>
                </Skeleton>
              </Row>
            </Col>

            <Col md={20} sm={24} xs={24}>
              <Row>
                <Title level={4}>{t('account_information')}</Title>
              </Row>
              {children}
            </Col>
          </Row>
        </Col>
      </Row>
    </WrapperProfile>
  );
}
