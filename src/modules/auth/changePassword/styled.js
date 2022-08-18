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
      .form__button {
        display: flex;
        justify-content: center;
      }
    }

    @media (max-width: 1200px) {
      font-size: ${FONTS_SIZE.size_12};
    }

    @media (max-width: 610px) {
      font-size: ${FONTS_SIZE.size_11};
    }
  }
`;

export const ValidationError = styled.div`
  color: red;
  width: 100%;
  height: 25px;
  margin-bottom: 5px;
`;
