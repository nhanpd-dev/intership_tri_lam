/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Row, Col, Select, Typography, Button, Image, Form, InputNumber, List, Space } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

import Discount from '../productDiscount/Discount';
import { useAuthStore } from '../../../../hooks/useAuth';
import { ProductDetailsBuyWrap, Price, Promotion, FormBuy } from './styled';

const { Title, Text, Link } = Typography;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
let vouchers = null;
const getvouchers = (vouchersData) => {
  console.log(vouchersData);
  vouchers = vouchersData.slice(-1);
};

const ProductDetailsBuy = ({ thumbnail, listImg, price, quantity, id, name }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation(['productDetails']);
  const { auth } = useAuthStore();
  const dataPromotion = [
    {
      content: `${t('buy.insert_code_SPPMWG')}`,
      link: ` (${t('buy.click_to_see_details')})`,
    },
    { content: `${t('buy.insert_code_MWG18')}`, link: ` (${t('buy.click_to_see_details')})` },
    {
      content: `${t('buy.insert_code_SPPMWG')}`,
      link: ` (${t('buy.click_to_see_details')})`,
    },
  ];
  const dataEndow = [
    {
      content: `${t('buy.give_to_customers')} BachhoaXANH.com`,
      link: ` (${t('buy.click_to_see_details')})`,
    },
    {
      content: `${t('buy.buy_Fashion_Watches')} `,
      link: ` (${t('buy.click_to_see_details')})`,
    },
  ];

  const onFinish = (values) => {
    console.log('don gia ', {
      name,
      price,
      id,
      number: values,
      vouchers,
    });
  };

  return (
    <ProductDetailsBuyWrap>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={14} lg={14}>
          <div className='image-container'>
            <div className='main-image'>
              <Image src={thumbnail} alt={t('buy.image_product')} />
            </div>
            <div className='rest-image'>
              <List
                className='image-list'
                bordered
                dataSource={listImg}
                renderItem={(img) => (
                  <List.Item className='img-item'>
                    <Image src={img} alt={t('buy.image_product')} />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={10} lg={10} className='title-interactive'>
          <Row gutter={24}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Price>
                <Text className='price-text'>{t('buy.price')}:</Text>
                <Text className='price-content'>{price}Đ</Text>
              </Price>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Promotion>
                <List
                  header={
                    <div className='promotion-item promotion-item-header'>
                      <Title className='promotion-item-title'>{t('buy.promotion')}</Title>
                      <Text>{t('buy.promotion_period')} 23:00 | 17/08</Text>
                    </div>
                  }
                  bordered
                  dataSource={dataPromotion}
                  renderItem={(item) => (
                    <List.Item className='promotion-item'>
                      <Text>
                        {item.content}
                        <Link>{item.link}</Link>
                      </Text>
                    </List.Item>
                  )}
                />
              </Promotion>

              <div>
                <Link>
                  <EnvironmentOutlined />
                  <Text>{t('buy.choose_a_delivery_address')}</Text>
                </Link>
              </div>

              <Text>{t('buy.please_choose_a_voucher')}</Text>

              <Discount getvouchers={getvouchers} />
              <FormBuy>
                <Form
                  name='validate_other'
                  {...formItemLayout}
                  onFinish={onFinish}
                  initialValues={{
                    number: 1,
                  }}
                >
                  <Form.Item label='Số lượng' className='form-item'>
                    <Form.Item name='number' noStyle>
                      <InputNumber min={1} max={quantity} />
                    </Form.Item>
                  </Form.Item>
                  <Button type='primary' htmlType='submit' className='button-buy' disabled={!auth}>
                    {t('buy.purchase')}
                  </Button>
                  {!auth && <Text className='text-not-login'>{t('buy.please_log_in')}</Text>}
                </Form>
              </FormBuy>

              <Promotion>
                <List
                  header={
                    <div className='promotion-item promotion-item-header'>
                      <Title className='promotion-item-title'>2 {t('buy.extra_offer')}</Title>
                      <Text>{t('buy.promotion_period')} 23:59 | 31/08</Text>
                    </div>
                  }
                  bordered
                  dataSource={dataEndow}
                  renderItem={(item) => (
                    <List.Item className='promotion-item'>
                      <Text>
                        {item.content}
                        <Link>{item.link}</Link>
                      </Text>
                    </List.Item>
                  )}
                />
              </Promotion>
            </Col>
          </Row>
        </Col>
      </Row>
    </ProductDetailsBuyWrap>
  );
};

export default ProductDetailsBuy;
