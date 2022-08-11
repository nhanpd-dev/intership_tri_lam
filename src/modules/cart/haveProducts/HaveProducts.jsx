import React from 'react';
import { Button, Checkbox, Col, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { HadProducts, Payment } from './styled';
import ListProducts from './component/listProducts/ListProducts';
import AddressShippingComp from './component/addressShipping/AddressShipping';
import PromotionsComp from './component/promotions/Promotions';
import ProvisionalCalculationComp from './component/provisionalCalculation/ProvisionalCalculation';
import { IMG_IPAD, IMG_IPHONE, IMG_MACBOOK } from '../../../assets/imgs/Cart/index';

function HaveProducts() {
  const { t } = useTranslation(['cart']);

  const ListProductsInCart = [
    { img: IMG_MACBOOK, linkTo: '#', nameProducts: t('MacBook Pro 16 inch 2021'), price: '59.580.000 ₫' },
    { img: IMG_IPAD, linkTo: '#', nameProducts: t('MacBook Pro 16 inch 2021'), price: '59.580.000 ₫' },
    { img: IMG_IPHONE, linkTo: '#', nameProducts: t('MacBook Pro 16 inch 2021'), price: '59.580.000 ₫' },
  ];

  const renderListProducts = () => {
    const List = [];

    ListProductsInCart.forEach((item, index) => {
      return List.push(
        <Row key={index} className='name_field'>
          <ListProducts img={item.img} linkTo={item.linkTo} nameProducts={item.nameProducts} price={item.price} />
        </Row>,
      );
    });

    return List;
  };

  return (
    <HadProducts>
      <Col span={22} offset={1} className='cart'>
        <Row>
          <Col span={17}>
            <Row className='name_field navbar_cart'>
              <Col span={10}>
                <Checkbox className='icon_check' />
                {t('all_products')}
              </Col>
              <Col span={5}>{t('unit_price')}</Col>
              <Col span={4}>{t('quantity')}</Col>
              <Col span={4}>{t('into_money')}</Col>
              <Col span={1}>
                <DeleteOutlined className='icon_delete' />
              </Col>
            </Row>
            {renderListProducts()}
          </Col>

          <Col span={7}>
            <Payment>
              <AddressShippingComp />
              <PromotionsComp />
              <ProvisionalCalculationComp />
              <Row>
                <Col span={24}>
                  <Button type='primary'>{t('buy_products')}</Button>
                </Col>
              </Row>
            </Payment>
          </Col>
        </Row>
      </Col>
    </HadProducts>
  );
}

export default HaveProducts;
