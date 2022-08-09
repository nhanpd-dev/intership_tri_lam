import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderLayout from './common/header/header';
import Slider from './common/slider/Slider';
import FooterLayout from './common/footer/footer';

function DashboardScreen() {
  const location = useLocation();

  return (
    <>
      <HeaderLayout />
      {/* {location.pathname === '/' && <DashboardLayout />} */}
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default DashboardScreen;
