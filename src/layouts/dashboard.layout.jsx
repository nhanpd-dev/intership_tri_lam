import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import HeaderLayout from './common/header/header';
import FooterLayout from './common/footer/footer';
import SliderLayout from './common/slider/Slider';

function DashboardScreen() {
  const location = useLocation();

  return (
    <>
      <HeaderLayout />
      {location.pathname === '/' ? <SliderLayout /> : ''}
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default DashboardScreen;
