import { useTranslation } from 'react-i18next';
import { Row, Col, Divider, Typography } from 'antd';
import DescriptionWrapper from './style';
const { Title, Paragraph } = Typography;
const ProductDetailsDescription = () => {
  const { t } = useTranslation(['productDetails']);
  return (
    <DescriptionWrapper>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Divider />
          <Title className='description-text'>{t('Description.describe')}</Title>
          <Paragraph className='description-content'>Thông tin sản phẩm</Paragraph>
        </Col>
      </Row>
    </DescriptionWrapper>
  );
};

export default ProductDetailsDescription;
