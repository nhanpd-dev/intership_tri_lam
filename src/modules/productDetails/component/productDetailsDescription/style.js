import styled from 'styled-components';

import { FONTS_SIZE } from '../../../../themes/fonts';

const DescriptionWrapper = styled.div`
  margin-top: 45px;
  .description-text {
    font-size: ${FONTS_SIZE.size_16};
  }

  @media (max-width: 739px) {
    margin-top: -10px;
  }

  @media (min-width: 740px) and (max-width: 1023px) {
    position: relative;
    top: -455px;
  }
`;
export default DescriptionWrapper;
