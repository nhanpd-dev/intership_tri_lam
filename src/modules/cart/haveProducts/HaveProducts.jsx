/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Button, Checkbox, Col, Popconfirm, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { Wrapper, Payment, Wrapperment } from './styled';
import ListProducts from './component/listProducts/listProducts';
import AddressShippingComp from './component/addressShipping/addressShipping';
import PromotionsComp from './component/promotions/promotions';
import ProvisionalCalculationComp from './component/provisionalCalculation/provisionalCalculation';
import { IMG_IPAD, IMG_IPHONE, IMG_MACBOOK } from '../../../assets/imgs/Cart/index';

function HaveProducts() {
  const { t } = useTranslation(['cart']);

  const [totalPrice, setTotalPrice] = useState(0);

  const ListProductsInCart = [
    { img: IMG_MACBOOK, linkTo: '#', nameProducts: t('MacBook Pro 16 inch 2021'), price: 59580000 },
    { img: IMG_IPAD, linkTo: '#', nameProducts: t('MacBook Pro 16 inch 2021'), price: 22380000 },
    { img: IMG_IPHONE, linkTo: '#', nameProducts: t('MacBook Pro 16 inch 2021'), price: 21758000 },
  ];

  const renderListProducts = () => {
    const List = [];

    ListProductsInCart.forEach((item, index) => {
      return List.push(
        <Row key={index} className='name_field'>
          <ListProducts
            img={item.img}
            linkTo={item.linkTo}
            nameProducts={item.nameProducts}
            price={item.price}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        </Row>,
      );
    });

    return List;
  };

  return (
    <Wrapper>
      <Col span={22} offset={1} className='cart'>
        <Row>
          <Col lg={17} sm={24}>
            <Row className='name_field navbar_cart'>
              <Col md={11}>
                <Checkbox className='icon_check' />
                {t('all_products')}
              </Col>
              <Col md={4}>{t('unit_price')}</Col>
              <Col md={4}>{t('quantity')}</Col>
              <Col md={4}>{t('into_money')}</Col>
              <Col md={1}>
                <Popconfirm title='Do you want to delete all?' okText='Yes' cancelText='No'>
                  <DeleteOutlined className='icon_delete' />
                </Popconfirm>
              </Col>
            </Row>
            {renderListProducts()}
          </Col>

          <Col lg={7} sm={24}>
            <Payment>
              <AddressShippingComp />
              <PromotionsComp />
              <ProvisionalCalculationComp totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
              <Row className='btn_buy'>
                <Col lg={24}>
                  <Button type='primary'>{t('buy_products')}</Button>
                </Col>
              </Row>
            </Payment>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
}

export default HaveProducts;
