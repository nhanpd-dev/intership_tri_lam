import React from 'react';
import { Col, Empty, Skeleton } from 'antd';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useTranslation } from 'react-i18next';

import { useCategories } from '../../../hooks/useCategories';
import { Slider } from './styled';
import ListItem from './SlideItem';

function SliderLayout() {
  const { categories, isLoading } = useCategories();

  const { t } = useTranslation(['common']);

  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  const renderListItems = () => {
    const List = [];

    categories.forEach((item) =>
      List.push(<ListItem key={item._id} linkTo={`/category/${item._id}`} nameItem={item.name} />),
    );

    return List;
  };

  return (
    <Slider>
      <Skeleton active loading={isLoading}>
        <Col span={22} offset={1} className='slider'>
          {!categories?.length ? (
            <Empty description={t('no_data')} />
          ) : (
            <AliceCarousel
              disableButtonsControls
              mouseTracking
              items={renderListItems()}
              paddingLeft={10}
              paddingRight={10}
              responsive={responsive}
            />
          )}
        </Col>
      </Skeleton>
    </Slider>
  );
}

export default SliderLayout;
