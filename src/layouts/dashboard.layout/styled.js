import styled from 'styled-components';

import COLORS from '../../themes/colors';

export const Dashboard = styled.div`
  width: 100%;
  margin-top: 20px;

  .slide {
    padding: 0 150px;

    .slide_serial {
      position: relative;
      display: flex;
    }

    .slide_item {
      padding: 15px 0;
      color: #fff;
      text-align: center;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      .slide_content {
        margin: 0 40px;
        color: #000;

        .slide_content-img {
          height: 70px;
          width: 70px;
          border-radius: 20px;
          box-shadow: 2px 2px 3px 0px #614b4b;
          border: 1px solid ${COLORS.primary};

          &:hover {
            border: 2px solid ${COLORS.seconary};
          }

          .content_img-selection {
            height: 100%;
            width: 100%;
            border-radius: 20px;
            object-fit: cover;
          }
        }
      }

      .content_title {
        display: flex;
        justify-content: center;
        margin: 10px 0;
        color: #000;
        font-size: 15px;

        &:hover {
          color: ${COLORS.seconary};
        }
      }
    }
  }
`;
