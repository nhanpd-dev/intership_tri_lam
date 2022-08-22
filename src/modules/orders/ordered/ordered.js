/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, Col, Popconfirm, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import Product from '../../cart/haveProducts/component/listProducts/listProducts';
import { Wrapper } from './styled';
import { useOrderStore } from '../../../hooks/useOrder';

function Ordered() {
  const { t } = useTranslation(['orders', 'cart']);

  const [check, setCheck] = useState(false);

  const { orders } = useOrderStore();

  const listOrdered = orders?.map((item) => item?.orders);

  const [cart, setCart] = useState([]);

  const renderListOrders = () =>
    cart?.map((item, index) => {
      return (
        <Row key={index} className='name_field'>
          <Product
            discount={item.discount}
            img={item.img}
            linkTo={item.linkTo}
            nameProducts={item.nameProducts}
            price={item.price}
            isCheck={item.isCheck}
            quantity={item.quantity}
          />
        </Row>
      );
    });

  return (
    <Wrapper>
      <Col span={22} offset={1} className='cart'>
        <Row>
          <Col lg={24} sm={24}>
            <Row className='name_field navbar_cart'>
              <Col md={11}>
                <Checkbox className='icon_check' />
                {t('cart:all_products')}
              </Col>
              <Col md={4}>{t('cart:unit_price')}</Col>
              <Col md={4}>{t('cart:quantity')}</Col>
              <Col md={4}>{t('cart:into_money')}</Col>
              <Col md={1}>
                <Popconfirm title='Do you want to delete all?' okText='Yes' cancelText='No'>
                  <DeleteOutlined className='icon_delete' />
                </Popconfirm>
              </Col>
            </Row>
            {renderListOrders()}
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
}

export default Ordered;
