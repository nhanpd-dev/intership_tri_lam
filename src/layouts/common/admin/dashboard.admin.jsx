import { Outlet } from 'react-router-dom';
import React from 'react';

import Header from './header/header';
import Footer from './footer/footer';

const DashboardAdminScreen = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardAdminScreen;
