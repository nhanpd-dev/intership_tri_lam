import styled from 'styled-components';

import COLORS from '../../themes/colors';

export const Dashboard = styled.div`
  width: 100%;
  margin-top: 20px;

  .ant-carousel .slick-dots li.slick-active button {
    background: #1980ff;
    opacity: 1;
  }

  .ant-carousel .slick-dots li button {
    background: #1980ff;
  }

  .ant-carousel .slick-dots-bottom {
    bottom: 0;
  }

  .ant-carousel .slick-dots li.slick-active {
    width: 40px;
  }

  .ant-carousel .slick-dots li button {
    height: 10px;

    &:hover {
      background: #f53677;
    }
  }

  .ant-carousel .slick-dots li {
    width: 30px;
  }

  .slide {
    padding: 0 100px;

    .slide_serial {
      position: relative;
      display: flex;

      .icon_next-slide,
      .icon_prev-slide {
        position: absolute;
        font-size: 20px;
        top: 40%;
        z-index: 1;
        cursor: pointer;
      }

      .icon_prev-slide {
        left: 10px;
      }

      .icon_next-slide {
        right: 10px;
      }
    }

    .slide_item {
      height: 160px;
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
            border: 2px solid #f53677;
          }

          .content_img-selection {
            height: 100%;
            width: 100%;
            border-radius: 20px;
            object-fit: cover;
          }
        }

        .content_title {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          color: #000;
          font-size: 15px;

          &:hover {
            color: #f53677;
          }
        }
      }
    }
  }
`;
