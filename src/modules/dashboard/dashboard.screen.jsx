import React from 'react';

import HeaderLayout from '../../layouts/header/header.layout';
import DashboardLayout from '../../layouts/dashboard.layout/dashboard.layout';
import FooterLayout from '../../layouts/footer/footer.layout';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function DashboardScreen() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <HeaderLayout />
      {location.pathname === '/' && <DashboardLayout />}
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default DashboardScreen;
