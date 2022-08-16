import styled from 'styled-components';

import { FONTS_SIZE } from '../../../../themes/fonts';

const ProductDetailsBuyWrap = styled.div`
  .image-container {
    width: 100%;
    border-radius: 10px;

    .main-image {
      margin-bottom: 5px;

      .ant-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .rest-image {
      .ant-list-items {
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        margin: 0;
        border-radius: 10px;

        .img-item {
          box-sizing: border-box;

          height: 100%;
          padding: 0;
          margin: 0 5px 0 5px;
          border-radius: 10px;

          .ant-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
`;

const Price = styled.div`
  .price-text {
    display: block;
    margin-top: 10px;
  }

  .price-content {
    display: block;
    font-size: ${FONTS_SIZE.size_20};
    font-weight: bold;
    color: #d0021c;
  }
`;

const Promotion = styled.div`
  list-style-type: none;
  margin-top: 10px;
  padding: 0;

  .ant-list-bordered {
    border: 1px solid #e0e0e0;
    border-radius: 5px;

    .ant-list-header {
      padding: 0;
    }

    .ant-list-items {
      .promotion-item {
        padding: 0;
        margin-left: 10px;
        min-height: 50px;

        .promotion-item-title {
          font-size: ${FONTS_SIZE.size_16};
        }

        @media (min-width: 740px) and (max-width: 1023px) {
          margin-bottom: 20px;
        }
      }
    }
  }

  .promotion-item-header {
    background-color: #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .promotion-item {
    min-height: 50px;

    .promotion-item-title {
      font-size: ${FONTS_SIZE.size_16};
    }

    @media (min-width: 740px) and (max-width: 1023px) {
      margin-bottom: 20px;
    }
  }
`;

const FormBuy = styled.div`
  display: block;

  .button-buy {
    width: 100%;
    height: 60px;
    display: block;
    border-radius: 50px;
    font-size: ${FONTS_SIZE.size_20};
  }

  .text-not-login {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 740px) and (max-width: 1023px) {
    margin-top: 40px;
  }
`;

export { ProductDetailsBuyWrap, Price, Promotion, FormBuy };
