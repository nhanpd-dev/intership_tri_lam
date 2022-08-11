import styled from 'styled-components';

import COLOR from '../../../themes/colors';

export const HadProducts = styled.div`
  .cart {
    .name_field {
      background: ${COLOR.background_primary};
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

      .list_products-content {
        width: 100%;
        align-items: center;
        margin: 15px 0;

        .red_color {
          color: ${COLOR.red};
        }

        .selector_price {
          font-weight: 500;
        }
      }
    }
  }
`;
