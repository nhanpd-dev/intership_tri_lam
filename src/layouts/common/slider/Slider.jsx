import React from 'react';
import { Col } from 'antd';
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

  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 7 },
  };

  const listItems = [
    { linkTo: '#', imgItem: IMG_DIEN_THOAI, nameItem: t('smartphone') },
    { linkTo: '#', imgItem: IMG_DIEN_TU, nameItem: t('electronic') },
    { linkTo: '#', imgItem: IMG_ME_VA_BE, nameItem: t('mom_and_baby') },
    { linkTo: '#', imgItem: IMG_NHA_CUA, nameItem: t('house') },
    { linkTo: '#', imgItem: IMG_THIT_RAU_CU, nameItem: t('food') },
    { linkTo: '#', imgItem: IMG_THOI_TRANG, nameItem: t('fashion') },
    { linkTo: '#', imgItem: IMG_DIEN_THOAI, nameItem: t('smartphone') },
    { linkTo: '#', imgItem: IMG_DIEN_TU, nameItem: t('electronic') },
    { linkTo: '#', imgItem: IMG_ME_VA_BE, nameItem: t('mom_and_baby') },
    { linkTo: '#', imgItem: IMG_NHA_CUA, nameItem: t('house') },
    { linkTo: '#', imgItem: IMG_THIT_RAU_CU, nameItem: t('food') },
    { linkTo: '#', imgItem: IMG_THOI_TRANG, nameItem: t('fashion') },
  ];

  const renderListItems = () => {
    const List = [];

    listItems.forEach((item, index) =>
      List.push(<ListItem key={index} linkTo={item.linkTo} imgItem={item.imgItem} nameItem={item.nameItem} />),
    );

    return List;
  };

  return (
    <Slider>
      <Col span={22} offset={1} className='slider'>
        <AliceCarousel
          disableButtonsControls
          mouseTracking
          items={renderListItems()}
          paddingLeft={10}
          paddingRight={10}
          responsive={responsive}
        />
      </Col>
    </Slider>
  );
}

export default SliderLayout;
