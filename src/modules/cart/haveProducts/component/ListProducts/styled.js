import styled from 'styled-components';

import COLORS from '../../../../../themes/colors';

export const Wrapper = styled.div`
  .list_products-content {
    width: 100%;
    align-items: center;
    margin: 15px 0;

    .info_product {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .img_product {
        height: 70px;
        width: 70px;
        margin-right: 10px;
      }

      .name_product {
        margin: 0 5px;
      }
    }

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
`;
