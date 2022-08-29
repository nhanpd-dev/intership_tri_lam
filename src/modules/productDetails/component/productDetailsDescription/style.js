import styled from 'styled-components';

import { FONTS_SIZE } from '../../../../themes/fonts';

const DescriptionWrapper = styled.div`
  margin-top: 0;
  .description-text {
    font-size: ${FONTS_SIZE.size_16};
  }

  @media (max-width: 739px) {
    margin-top: -10px;
  }

  @media (min-width: 768px) and (max-width: 1018px) {
    position: absolute;
    top: 650px;
  }
`;
export default DescriptionWrapper;
