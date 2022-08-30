import styled from 'styled-components';

import COLORS from '../../../themes/colors';
import MARGIN from '../../../themes/margin';

export const Slider = styled.div`
  width: 100%;
  margin-top: ${MARGIN.mt_100};

  .ant-image {
    height: 100%;
  }

  .alice-carousel__wrapper {
    height: 64px;
    font-weight: 500;
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
      text-align: center;

      .list_item-content {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }

      .item_content-title {
        &:hover {
          color: #f53677;
        }
      }
    }
  }
`;
