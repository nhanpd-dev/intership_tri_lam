/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Select, Typography, Button, Image, Form, InputNumber } from 'antd';
import { useAuthStore } from '../../../../hooks/useAuth';
import { SmileOutlined, EnvironmentOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { ProductDetailsBuyWrap, Price, Promotion, FormBuy, Discount } from './styled';

const { Title, Text, Link } = Typography;
const { Option } = Select;

const { auth } = useAuthStore;
const vorcher = {
  name: null,
  vorchers: [],
  price: null,
  quanlity: null,
};
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const ProductDetailsBuy = ({ thumbnail, listImg }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation(['productDetails']);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    vorcher.name = 'Pin sac';
    vorcher.price = 62000;
    vorcher.quanlity = values;
    console.log(vorcher);
  };
  const handleChange = (value) => {
    vorcher.vorchers.push(value);
    console.log(`selected ${value}`);
  };
  return (
    <ProductDetailsBuyWrap>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={14} lg={14}>
          <div className='image-container'>
            <div className='main-image'>
              <Image src={thumbnail} alt={t('Buy.image_product')} />
            </div>
            <div className='rest-image'>
              <ul className='image-list'>
                {
                  listImg.map((img, index) => {
                    return (
                      <li key={index} className='img-item'>
                        <Image src={img} alt={t('Buy.image_product')} />
                      </li>
                    );
                  })
                  // } else {
                  //   return null;
                  // <li className='img-item'>
                  //   <Image
                  //     preview={{
                  //       visible: false,
                  //     }}
                  //     src={img7}
                  //     onClick={() => setVisible(true)}
                  //   />
                  //   <div
                  //     style={{
                  //       display: 'none',
                  //     }}
                  //   >
                  //     <Image.PreviewGroup
                  //       preview={{
                  //         visible,
                  //         onVisibleChange: (vis) => setVisible(vis),
                  //       }}
                  //     >
                  //       {listImg.map(img, (index) => {
                  //         if (index > 7) {
                  //           return <Image src={img} alt={t('Buy.image_product')} />;
                  //         }
                  //       })}
                  //     </Image.PreviewGroup>
                  //   </div>
                  // </li>
                }
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={10} lg={10} className='title-interactive'>
          <Row gutter={24}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Price>
                <Text className='price-text'>{t('Buy.price')}:</Text>
                <Text className='price-content'>630.000Đ</Text>
              </Price>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Promotion>
                <li className='promotion-item promotion-item-title-header'>
                  <Title className='promotion-item-title'>{t('Buy.promotion')}</Title>
                  <Text>{t('Buy.promotion_period')} 23:00 | 17/08</Text>
                </li>

                <li className='promotion-item'>
                  <span className='promotion-item-order'>1 </span>
                  <Text>
                    {t('Buy.insert_code_SPPMWG')}
                    <Link>{` (${t('Buy.click_to_see_details')})`}</Link>
                  </Text>
                </li>
                <li className='promotion-item'>
                  <span className='promotion-item-order'>2 </span>
                  <Text>
                    {t('Buy.insert_code_MWG18')}
                    <Link>{` (${t('Buy.click_to_see_details')})`}</Link>
                  </Text>
                </li>
                <li className='promotion-item item-laster'>
                  <span className='promotion-item-order'>3 </span>
                  <Text>
                    {t('Buy.insert_code_SPPMWG')}
                    <Link>{` (${t('Buy.click_to_see_details')})`}</Link>
                  </Text>
                </li>
              </Promotion>

              <div>
                <Link>
                  <EnvironmentOutlined />
                  <Text>{t('Buy.choose_a_delivery_address')}</Text>
                </Link>
              </div>

              <Text>{t('Buy.please_choose_a_voucher')}</Text>

              <Discount>
                <Select
                  mode='multiple'
                  style={{
                    width: '100%',
                  }}
                  placeholder='select one your vorcher'
                  defaultValue={[`${t('Buy.no_vouchers')}`]}
                  onChange={handleChange}
                  optionLabelProp='label'
                >
                  <Option value='2000' label='2000Đ'>
                    <div className='demo-option-label-item'>
                      <span role='img' aria-label='VietNam'>
                        vn
                      </span>
                      {t('Buy.2_thousand_dong_discount')}
                    </div>
                  </Option>

                  <Option value='50000' label='5000Đ'>
                    <div className='demo-option-label-item'>
                      <span role='img' aria-label='VietNam'>
                        vn
                      </span>
                      {t('Buy.50_thousand_dong_discount')}
                    </div>
                  </Option>
                </Select>
              </Discount>

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
                      <InputNumber min={1} />
                    </Form.Item>
                  </Form.Item>
                  <Button type='primary' htmlType='submit' className='button-buy' disabled={!auth}>
                    {t('Buy.purchase')}
                  </Button>
                  {!auth && <Text className='text-not-login'>{t('Buy.please_log_in')}</Text>}
                </Form>
              </FormBuy>

              <Promotion>
                <li className='promotion-item promotion-item-title-header'>
                  <Title className='promotion-item-title'>2 {t('Buy.extra_offer')}</Title>
                  <Text>{t('Buy.expected_to_apply_to')} 23:59 | 31/08</Text>
                </li>

                <li className='promotion-item'>
                  <span className='promotion-item-order'>
                    <SmileOutlined />
                  </span>
                  <Text>
                    {t('Buy.give_to_customers')} BachhoaXANH.com
                    <Link>{` (${t('Buy.click_to_see_details')})`}</Link>
                  </Text>
                </li>

                <li className='promotion-item item-laster'>
                  <span className='promotion-item-order'>
                    <CheckCircleOutlined />
                  </span>
                  <Text>
                    {t('Buy.buy_Fashion_Watches')}
                    <Link>{` (${t('Buy.click_to_see_details')})`}</Link>
                  </Text>
                </li>
              </Promotion>
            </Col>
          </Row>
        </Col>
      </Row>
    </ProductDetailsBuyWrap>
  );
};

export default ProductDetailsBuy;
