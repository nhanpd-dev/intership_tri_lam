/* eslint-disable react/prop-types */
import styled from 'styled-components';
import FONTS_SIZE from '../../../themes/fonts';
import COLORS from '../../../themes/colors';

export const Wrapper = styled.div`
  font-size: 14px;

  .ant-input{
    height: 40px;
    border: 1px solid ${COLORS.primary};
  }
  
  .label {
    margin-bottom: 5px;
    color: #607d8b;

    .ant-typography {
      color: #607d8b;
  }

  .icon {
    margin-right: 8px;
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

export const WrapperError = styled.div`
  color: red;
  width: 100%;
  height: 25px;
  margin-bottom: 5px;

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
