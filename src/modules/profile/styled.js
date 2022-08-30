import styled from 'styled-components';

import { FONTS_SIZE } from '../../themes/fonts';
import MARGIN from '../../themes/margin';

export const WrapperProfile = styled.div`
  margin-top: ${MARGIN.mt_100};
  background: #f6f6fa;

  @media (max-width: 1200px) {
    font-size: ${FONTS_SIZE.size_12};
  }

  .avatar {
    width: 55px;
    height: 55px;
    border-style: none;
    border-radius: 50%;
    object-fit: cover;
  }
`;
