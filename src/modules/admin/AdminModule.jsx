import React from 'react';
import { Outlet } from 'react-router-dom';

import SildeBar from './sildebar/SildeBar';
import { AdminWrapper, ContentWrapper } from './style';

const AdminModule = () => {
  return (
    <>
      <AdminWrapper>
        <SildeBar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </AdminWrapper>
    </>
  );
};

export default AdminModule;
