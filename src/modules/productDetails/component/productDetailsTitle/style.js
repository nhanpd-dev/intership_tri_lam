import styled from 'styled-components';

import { FONTS_SIZE } from '../../../../themes/fonts';

const TitleWrap = styled.div`
  .category-text {
    font-size: ${FONTS_SIZE.size_16};
    font-weight: 400;
    color: #bcbcbc;
  }

  .title-cover {
    display: flex;
    box-sizing: border-box;

    .title-name {
      font-size: ${FONTS_SIZE.size_16};
      font-weight: bold;
    }

    .title-interactive {
      display: flex;
      justify-content: space-between;

      .title-evaluate {
        display: block;

        .title-evaluate-text {
          @media (min-width: 740px) and (max-width: 1023px) {
            position: relative;
            left: -180px;
          }
        }
      }

      .title-button {
        display: flex;
        align-items: center;
        text-align: center;
        height: 25px;
        border-radius: 3px;
        margin-right: 5px;
      }
    }
  }
`;

const GroupStar = styled.div`
  display: block;
  color: #dddd00;

  @media (max-width: 739px) {
    margin-right: 15px;
  }
`;

export { TitleWrap, GroupStar };
