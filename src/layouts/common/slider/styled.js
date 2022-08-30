import styled from 'styled-components';

import COLORS from '../../../themes/colors';
import MARGIN from '../../../themes/margin';

export const Slider = styled.div`
  width: 100%;
  margin-top: ${MARGIN.mt_100};

  .ant-image {
    height: 100%;
  }

  .alice-carousel__dots {
    margin: -5px 5px -5px;
  }

  .slider {
    height: 100%;
    background: ${COLORS.background_primary};

    .list_item {
      max-width: 100%;
      margin: 10px 0 0 40px;

      .list_item-content {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }

      .item_content-img {
        height: 70px;
        width: 100%;

        .img_selector {
          width: 80px;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid #1980ff;
          box-shadow: 2px 2px 3px 0px #614b4b;

          &:hover {
            border: 2px solid #f53677;
          }
        }
      }

      .item_content-title {
        &:hover {
          color: #f53677;
        }
      }
    }
  }
`;
