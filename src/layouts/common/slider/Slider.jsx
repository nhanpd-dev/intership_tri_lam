import { Col, Row } from 'antd';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useTranslation } from 'react-i18next';

import { Slider } from './styled';
import ListItem from './SlideItem';
import {
  IMG_DIEN_TU,
  IMG_NHA_CUA,
  IMG_DIEN_THOAI,
  IMG_THIT_RAU_CU,
  IMG_THOI_TRANG,
  IMG_ME_VA_BE,
} from '../../../assets/imgs/dasboard/index';

function SliderLayout() {
  const { t } = useTranslation(['slider']);

  const items = [
    // One row is 6 Item
    <Row className='list_item'>
      <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_THOAI} nameItem={'smartphone'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_TU} nameItem={'electronic'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_ME_VA_BE} nameItem={'mom_and_baby'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_NHA_CUA} nameItem={'house'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_THIT_RAU_CU} nameItem={'food'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_THOI_TRANG} nameItem={'fashion'} />
    </Row>,
    <Row className='list_item'>
      <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_THOAI} nameItem={'smartphone'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_TU} nameItem={'electronic'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_ME_VA_BE} nameItem={'mom_and_baby'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_NHA_CUA} nameItem={'house'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_THIT_RAU_CU} nameItem={'food'} />
      <ListItem t={t} linkTo='/' imgItem={IMG_THOI_TRANG} nameItem={'fashion'} />
    </Row>,
  ];

  return (
    <Slider>
      <Col span={22} offset={1} className='slider'>
        <AliceCarousel mouseTracking items={items} />
      </Col>
    </Slider>
  );
}

export default SliderLayout;
