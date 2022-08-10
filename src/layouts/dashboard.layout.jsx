import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderLayout from './common/header/header';
import FooterLayout from './common/footer/footer';

function DashboardScreen() {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default DashboardScreen;
