import styled from 'styled-components';
import { FONTS_SIZE } from '../../../../themes/fonts';

const ProductDetailsBuyWrap = styled.div`
  .image-container {
    width: 100%;
    border-radius: 10px;

    .main-image {
      background-color: rgb(209, 81, 81);
      margin-bottom: 5px;

      .ant-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .rest-image {
      .image-list {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;

        .img-item {
          background-color: rgb(81, 209, 149);
          box-sizing: border-box;
          width: 19%;
          height: 100%;
          margin: 0 5px 0 5px;
          border-radius: 10px;
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
    color: #d0021c; //mau do
  }
`;

const Promotion = styled.ul`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  list-style-type: none;
  margin: 10px 0 10px 0;
  padding: 0;

  .promotion-item-title-header {
    background-color: #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .promotion-item {
    min-height: 50px;

    .promotion-item-title {
      font-size: ${FONTS_SIZE.size_16};
    }

    .promotion-item-order {
      background-color: #4a90df;
      border-radius: 50%;
      color: #fff;
      display: inline-block;
      font-size: 11px;
      float: left;
      height: 16px;
      line-height: 16px;
      margin: 2px 2px 0 4px;
      text-align: center;
      width: 16px;
    }

    @media (min-width: 740px) and (max-width: 1023px) {
      margin-bottom: 20px;
    }
  }

  .item-laster {
    @media (max-width: 739px) {
      margin-bottom: 20px;
      color: Red;
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

const Discount = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  height: 30px;
  margin-bottom: 10px;
`;

export { ProductDetailsBuyWrap, Price, Promotion, FormBuy, Discount };
