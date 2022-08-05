import styled from 'styled-components';

import COLORS from '../../themes/colors';

export const Content = styled.div`
  .content_sub {
    margin-bottom: 7px;
    color: #808089;

    .phone_support {
      color: #000;

      &:hover {
        color: ${COLORS.primary};
      }
    }

    &:hover {
      color: ${COLORS.primary};
    }
  }
`;
