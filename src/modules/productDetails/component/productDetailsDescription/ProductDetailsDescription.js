import { useTranslation } from 'react-i18next';
import { Row, Col, Divider, Typography } from 'antd';
import DescriptionWrapper from './style';
const { Title, Paragraph } = Typography;
const ProductDetailsDescription = ({ description }) => {
  const { t } = useTranslation(['productDetails']);
  return (
    <DescriptionWrapper>
      <Row>
        <Col xs={24} sm={24} md={14} lg={24}>
          <Divider />
          <Title className='description-text'>{t('description.describe')}</Title>
          <Paragraph className='description-content'>{description}</Paragraph>
        </Col>
      </Row>
    </DescriptionWrapper>
  );
};

export default ProductDetailsDescription;
