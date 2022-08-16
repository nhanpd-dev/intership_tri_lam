import styled from 'styled-components';

import COLORS from '../../../themes/colors';
import FONTS_SIZE from '../../../themes/fonts';

export const HadProducts = styled.div`
  .fs-16 {
    font-size: ${FONTS_SIZE.size_16};
  }

  .ant-btn.ant-btn-primary {
    width: 100%;
    background-color: ${COLORS.red};
    color: ${COLORS.white};
    text-align: center;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  .cart {
    .navbar_cart {
      margin-bottom: 10px;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    .btn_buy {
      justify-content: flex-end;
    }

    .name_field {
      background: ${COLORS.background_primary};
      padding: 9px 16px;
      border-radius: 4px;
      font-weight: 400;
      font-size: 13px;

      .icon_check {
        margin-right: 10px;
      }

      .icon_delete {
        cursor: pointer;
      }
    }

    .list_products-content {
      width: 100%;
      align-items: center;
      margin: 15px 0;

      .red_color {
        color: ${COLORS.red};
      }

      .selector_price {
        font-weight: 500;
      }

      @media only screen and (max-width: 768px) {
        .unit_price {
          display: none;
        }
      }
    }
  }
`;

export const Payment = styled.div`
  padding-left: 20px;

  .payment_content {
    background: ${COLORS.background_primary};
    margin-bottom: 10px;
    border-radius: 4px;

    .content_selector {
      padding: 5px 15px;
      align-items: center;
    }

    @media only screen and (max-width: 992px) {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 992px) {
    padding-left: 0px;
  }
`;
