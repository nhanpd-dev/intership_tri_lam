import { Carousel, Row } from 'antd';
import React from 'react';

import { Dashboard } from './styled.js';
import ListItem from './component.listItem.js';
import {
  IMG_DIEN_TU,
  IMG_NHA_CUA,
  IMG_DIEN_THOAI,
  IMG_THIT_RAU_CU,
  IMG_THOI_TRANG,
  IMG_ME_VA_BE,
} from '../../assets/imgs/dasboard/index';
import { useTranslation } from 'react-i18next';

function DashboardLayout() {
  const { t } = useTranslation(['dashboard']);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Dashboard>
      <Carousel autoplay afterChange={onChange} className='slide'>
        <Row className='slide_serial'>
          <Row className='slide_item'>
            <ListItem t={t} linkTo='/' imgItem={IMG_ME_VA_BE} nameItem={'mother_and_baby'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_THOAI} nameItem={'smartphone'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_TU} nameItem={'electronic'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_NHA_CUA} nameItem={'house'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_THIT_RAU_CU} nameItem={'food'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_THOI_TRANG} nameItem={'fashion'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_NHA_CUA} nameItem={'house'} />
          </Row>
        </Row>
        <Row className='slide_serial'>
          <Row className='slide_item'>
            <ListItem t={t} linkTo='/' imgItem={IMG_ME_VA_BE} nameItem={'mother_and_baby'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_THOAI} nameItem={'smartphone'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_DIEN_TU} nameItem={'electronic'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_NHA_CUA} nameItem={'house'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_THIT_RAU_CU} nameItem={'food'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_NHA_CUA} nameItem={'house'} />
            <ListItem t={t} linkTo='/' imgItem={IMG_THOI_TRANG} nameItem={'fashion'} />
          </Row>
        </Row>
      </Carousel>
    </Dashboard>
  );
}

export default DashboardLayout;
