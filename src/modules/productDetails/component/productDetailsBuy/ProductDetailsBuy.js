/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Typography, Button, Image, Form, InputNumber, List } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

import { useAuthStore } from '../../../../hooks/useAuth';
import { useProductStore } from '../../useProductDetails';
import { ProductDetailsBuyWrap, Price, Promotion, FormBuy } from './styled';

const { Title, Text, Link } = Typography;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const ProductDetailsBuy = ({ thumbnail, listImg, price, quantity, id, name, discount }) => {
  const { t } = useTranslation(['productDetails']);

  const { auth } = useAuthStore();

  const { orderToCart } = useProductStore();

  const dataPromotion = [
    {
      index: 1,
      content: `${t('buy.insert_code_sppmwq')}`,
      link: ` (${t('buy.click_to_see_details')})`,
    },
    { index: 2, content: `${t('buy.insert_code_mwg18')}`, link: ` (${t('buy.click_to_see_details')})` },
    {
      index: 3,
      content: `${t('buy.insert_code_sppmwq')}`,
      link: ` (${t('buy.click_to_see_details')})`,
    },
  ];

  const dataEndow = [
    {
      index: 1,
      content: `${t('buy.give_to_customers')} BachhoaXANH.com`,
      link: ` (${t('buy.click_to_see_details')})`,
    },
    {
      index: 2,
      content: `${t('buy.buy_fashion_watches')} `,
      link: ` (${t('buy.click_to_see_details')})`,
    },
  ];

  const onFinish = async (values) => {
    const data = {
      name,
      listImg,
      productId: id,
      quantity: values.number,
      discount,
      price,
    };

    await orderToCart(data);
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
                  <List.Item key={img} className='img-item'>
                    <Image src={img} alt={t('buy.image_product')} preview={false} />
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
                {discount ? (
                  <div className='price-content-extend'>
                    <Text delete className='price-content'>
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
                    </Text>

                    <Text className='price-discount'>
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                        price - price * discount,
                      )}
                    </Text>
                    <Text code className='price-percent'>{`${discount * 100}%`}</Text>
                  </div>
                ) : (
                  <Text className='price-content'>{price} Đ</Text>
                )}
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
                    <List.Item key={item.index} className='promotion-item'>
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
              <FormBuy>
                <Form
                  name='validate_other'
                  {...formItemLayout}
                  onFinish={onFinish}
                  initialValues={{
                    number: 1,
                  }}
                >
                  <Form.Item label={t('buy.amount')} className='form-item'>
                    <Form.Item name='number' noStyle>
                      <InputNumber min={1} max={quantity} />
                    </Form.Item>
                  </Form.Item>
                  <Button type='primary' htmlType='submit' className='button-buy' disabled={!auth || !quantity}>
                    {t('buy.purchase')}
                  </Button>
                  {!quantity && <Text className='text-not-login'>{t('buy.out_of_stock')}</Text>}
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
                    <List.Item key={item.index} className='promotion-item'>
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
