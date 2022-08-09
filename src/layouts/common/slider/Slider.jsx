import { Carousel, Row } from 'antd';
import React from 'react';

import { Dashboard } from './styled.js';
import ListItem from './SlideItem.js';
import {
  IMG_DIEN_TU,
  IMG_NHA_CUA,
  IMG_DIEN_THOAI,
  IMG_THIT_RAU_CU,
  IMG_THOI_TRANG,
  IMG_ME_VA_BE,
} from '../../../assets/imgs/dasboard/index';
import { useTranslation } from 'react-i18next';

function DashboardLayout() {
  const { t } = useTranslation(['']);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Dashboard>
      <Carousel afterChange={onChange} className='slide'>
        <Row className='slide_serial'>
          <Row className='slide_item'>
            <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_THOAI} nameItem='Dien thoai' />
            <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_TU} nameItem='Dien tu' />
            <ListItem t={t} linkTo='/' imgItem={IMG_NHA_CUA} nameItem='Nha cua' />
            <ListItem t={t} linkTo='/' imgItem={IMG_THIT_RAU_CU} nameItem='Thit, Rau cu' />
            <ListItem t={t} linkTo='/' imgItem={IMG_THOI_TRANG} nameItem='Thoi trang' />
            <ListItem t={t} linkTo='/' imgItem={IMG_ME_VA_BE} nameItem='Me va Be' />
          </Row>
        </Row>
        <Row className='slide_serial'>
          <Row className='slide_item'>
            <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_THOAI} nameItem='Dien thoai' />
            <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_TU} nameItem='Dien tu' />
            <ListItem t={t} linkTo='/' imgItem={IMG_NHA_CUA} nameItem='Nha cua' />
            <ListItem t={t} linkTo='/' imgItem={IMG_THIT_RAU_CU} nameItem='Thit, Rau cu' />
            <ListItem t={t} linkTo='/' imgItem={IMG_THOI_TRANG} nameItem='Thoi trang' />
            <ListItem t={t} linkTo='/' imgItem={IMG_ME_VA_BE} nameItem='Me va Be' />
          </Row>
        </Row>
      </Carousel>
    </Dashboard>
  );
}

export default DashboardLayout;
