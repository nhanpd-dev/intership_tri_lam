import React from 'react';
import { Col, Image, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './styled';
import { IMG_NOT_FOUND } from '../../assets/imgs/notFound/index';

function NotFoundScreen() {
  const { t } = useTranslation(['notFound']);

  return (
    <Wrapper>
      <Row>
        <Col span={22} offset={1}>
          <Image src={IMG_NOT_FOUND} alt={t('not_found_link')} preview={false} />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default NotFoundScreen;
