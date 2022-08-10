import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderLayout from './common/header/header';
import FooterLayout from './common/footer/footer';
import SliderLayout from './common/slider/Slider';

function DashboardScreen() {
  return (
    <>
      <HeaderLayout />
      <SliderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default DashboardScreen;
