import styled from 'styled-components';

import COLORS from '../../../themes/colors';

export const Slider = styled.div`
  width: 100%;
  margin-top: 20px;

  .alice-carousel__dots {
    margin: -5px 3px -7px;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    padding: 0px 5px;
  }

  .slider {
    height: 100%;
    background: ${COLORS.background_primary};

    .list_item {
      max-width: 60%;
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

        .item_content-title {
          &:hover {
            color: ${COLORS.secondary};
          }
        }
      }
    }
  }
`;
