import { useTranslation } from 'react-i18next';
import { Row, Col, Divider, Typography, Button } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { TitleWrap, GroupStar } from './style';
import React from 'react';
const { Text } = Typography;

const ProductDetailsTitle = ({ categoryId, nameProduct, numberOfSell }) => {
  const { t } = useTranslation(['productDetails']);

  return (
    <TitleWrap>
      <Row>
        <Col xs={24} sm={24} md={16} lg={16}>
          <Text className='category-text'>{categoryId}</Text>
        </Col>
      </Row>

      <Row gutter={24} className='title-cover'>
        <Col xs={24} sm={24} md={16} lg={16} className='title-name'>
          <Text className='title-content'>{nameProduct}</Text>
        </Col>

        <Col xs={24} sm={24} md={24} lg={8} className='title-interactive'>
          <GroupStar>
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </GroupStar>

          <div className='title-evaluate'>
            <Text className='title-evaluate-text'>
              (128 {t('Title.evaluate')}) | {t('Title.sold')} {numberOfSell}
            </Text>
          </div>

          <Button type='primary' className='title-button'>
            {t('Title.share')}
          </Button>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <Divider />
        </Col>
      </Row>
    </TitleWrap>
  );
};

export default ProductDetailsTitle;
