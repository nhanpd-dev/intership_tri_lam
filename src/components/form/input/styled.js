/* eslint-disable react/prop-types */
import styled from 'styled-components';
import FONTS_SIZE from '../../../themes/fonts';

export const Wrapper = styled.div`
  .label {
    margin-bottom: 5px;
  }

  .icon {
    margin-right: 3px;
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
`;
