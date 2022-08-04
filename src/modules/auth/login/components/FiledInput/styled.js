import styled from 'styled-components';
import COLORS from '../../../../../themes/colors';
import { FONTS_SIZE } from '../../../../../themes/fonts';

export const LabelItem = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  color: #607d8b;
  font-weight: 300;
  letter-spacing: 1px;
  .icon {
    margin-right: 3px;
  }
  .icon-required {
    color: red;
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
`;

export const InputItem = styled.input`
  width: 100%;
  height: 50px;
  padding: 6px 20px;
  font-weight: 400;
  border: 1px solid ${COLORS.background_primary};
  font-size: 16px;
  color: #607d8b;
  border-radius: 30px;
  outline-color: ${COLORS.background_primary};
  @media (max-width: 768px) {
    height: 40px;
  }
  @media (max-width: 414px) {
    height: 40px;
  }
`;
