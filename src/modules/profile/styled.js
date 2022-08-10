import styled from 'styled-components';
import { FONTS_SIZE } from '../../themes/fonts';

export const WrapperProfile = styled.div`
  margin-top: 20px;
  background: #f6f6fa;

  @media (max-width: 1200px) {
    font-size: ${FONTS_SIZE.size_12};
  }

  @media (max-width: 576px) {
    font-size: ${FONTS_SIZE.size_8};
  }

  .avatar {
    width: 55px;
    height: 55px;
    border-style: none;
    border-radius: 50%;
    object-fit: cover;
  }
`;
