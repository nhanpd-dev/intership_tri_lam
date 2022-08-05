import React from 'react';

import FooterLayout from '../../layouts/footer/footer.layout';
import HeaderLayout from '../../layouts/header/header.layout';
import { Wrapper } from './styled';

function DashboardScreen() {
  return (
    <Wrapper>
      <HeaderLayout />
      <FooterLayout />
    </Wrapper>
  );
}

export default DashboardScreen;
