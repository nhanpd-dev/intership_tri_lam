/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from 'react';
import { Button, Checkbox, Col, notification, Popconfirm, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import Product from './component/ListProducts/ListProducts';
import AddressShippingComp from './component/addressShipping/AddressShipping';
import PromotionsComp from './component/promotions/Promotions';
import ProvisionalCalculationComp from './component/provisionalCalculation/ProvisionalCalculation';
import { useProductStore } from '../../../hooks/useProductDetail';
import { useOrderStore } from '../../../hooks/useOrder';
import { Wrapper, Payment } from './styled';

function HaveProducts() {
  const { t } = useTranslation(['cart']);

  const { orderPost } = useOrderStore();

  const { cart, deleteToCart, changeToCart } = useProductStore();

  const listOrdersCheckTrue = cart.filter((item) => item.isCheck === true && item.quantity !== 0);

  const listOrdersPost = listOrdersCheckTrue.map((item) => {
    return {
      productId: item.productId,
      quantity: item.quantity,
      discount: item.discount,
      price: item.price,
    };
  });

  const total = useMemo(() => {
    const cloneOrders = cart?.filter((i) => i.isCheck);

    if (cloneOrders.length) {
      return cloneOrders.reduce((acumulator, item) => {
        const priceOfProducts = item.price * item.quantity - item.price * item.discount * item.quantity;

        return acumulator + priceOfProducts;
      }, 0);
    }

    return 0;
  }, [cart]);

  const provisional = useMemo(() => {
    const cloneOrders = cart?.filter((i) => i.isCheck);

    if (cloneOrders.length) {
      const totalOrdersPrice = cloneOrders.reduce((acumulator, item) => {
        const priceOfProducts = item.price * item.quantity;

        return acumulator + priceOfProducts;
      }, 0);

      return totalOrdersPrice;
    }

    return 0;
  }, [cart]);

  const renderListOrders = () =>
    cart.map((item, index) => {
      return (
        <Row key={index} className='name_field'>
          <Product
            productId={item.productId}
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

  const postOrderSuccess = () => {
    notification.success({
      message: t('orders_success'),
    });
  };

  const postOrderFail = () => {
    notification.error({
      message: t('orders_fail'),
    });
  };

  const buyProducts = () => {
    orderPost({ data: { orders: listOrdersPost }, postOrderSuccess: postOrderSuccess, postOrderFail: postOrderFail });
  };

  const confirmDelete = () => {
    deleteToCart();
  };

  const changeCheckAll = (e) => {
    changeToCart({ isCheck: e.target.checked });
  };

  return (
    <Wrapper>
      <Col span={22} offset={1} className='cart'>
        <Row>
          <Col lg={17} sm={24}>
            <Row className='name_field navbar_cart'>
              <Col md={13}>
                <Checkbox className='icon_check' onChange={changeCheckAll} />
                {t('all_products')}
              </Col>
              <Col md={3}>{t('unit_price')}</Col>
              <Col md={4}>{t('quantity')}</Col>
              <Col md={3}>{t('into_money')}</Col>
              <Col md={1}>
                <Popconfirm title={t('delete_all')} okText={t('yes')} cancelText={t('no')} onConfirm={confirmDelete}>
                  <DeleteOutlined className='icon_delete' />
                </Popconfirm>
              </Col>
            </Row>
            {renderListOrders()}
          </Col>

          <Col lg={7} sm={24} xs={24}>
            <Payment>
              <AddressShippingComp />
              <PromotionsComp />
              <ProvisionalCalculationComp price={total} provisional={provisional} />
              <Row className='btn_buy'>
                <Col lg={24}>
                  <Button type='primary' onClick={buyProducts} disabled={!total}>
                    {t('buy_products')}
                  </Button>
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
