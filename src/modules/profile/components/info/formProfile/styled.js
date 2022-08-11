import styled from 'styled-components';
import { FONTS_SIZE } from '../../../../../themes/fonts';
import COLORS from '../../../../../themes/colors';

export const WrapperForm = styled.div`
  .form {
    @media (max-width: 1200px) {
      font-size: ${FONTS_SIZE.size_12};
    }

    @media (max-width: 610px) {
      font-size: ${FONTS_SIZE.size_11};
    }

    .flex-avatar {
      display: flex;
      justify-content: center;

      .avatar-view {
        width: 130px;
        height: 130px;
        border-style: none;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .icon {
      margin-right: 2px;
      color: ${COLORS.primary};
    }

    .button-save {
      display: flex;
      justify-content: center;
    }
  }
`;

export const ValidationError = styled.div`
  color: red;
  width: 100%;
  height: 25px;
  margin-bottom: 5px;
`;
