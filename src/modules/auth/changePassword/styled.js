import styled from 'styled-components';
import { FONTS_SIZE } from '../../../themes/fonts';
import COLORS from '../../../themes/colors';

export const Wrapper = styled.div`
  .form {
    background: ${COLORS.background_primary};
    padding: 30px;
    border-radius: 8px;
    margin-bottom: 20px;

    .form__space {
      display: flex;

      .form__checkbox,
      .form__btn {
        display: flex;
        justify-content: center;

        .ant-btn {
          border-radius: 16px;
        }

        @media (max-width: 896px) {
          font-size: ${FONTS_SIZE.size_14};
        }

        @media (max-width: 768px) {
          font-size: ${FONTS_SIZE.size_12};
        }

        @media (max-width: 414px) {
          font-size: ${FONTS_SIZE.size_11};
        }
      }
    }
  }
`;
