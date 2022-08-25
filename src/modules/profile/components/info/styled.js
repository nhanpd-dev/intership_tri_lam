import styled from 'styled-components';
import COLORS from '../../../../themes/colors';

export const WrapperInfo = styled.div`
  .form-profile {
    background: ${COLORS.background_primary};
    padding: 30px;
    border-radius: 8px;
    margin-bottom: 20px;

    .ant-btn {
      @media (max-width: 896px) {
        font-size: 14px;
      }

      @media (max-width: 768px) {
        font-size: 12px;
      }

      @media (max-width: 414px) {
        font-size: 11px;
      }
    }

    .divider {
      height: 100%;
    }
  }
`;
