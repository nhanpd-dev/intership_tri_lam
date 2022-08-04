import styled from 'styled-components';

import COLORS from '../../../../themes/colors';

export const Fields = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ContentField = styled.div`
  display: flex;
  align-items: center;

  .gender-input {
    margin: 0 10px;
  }

  .selector-gender {
    display: flex;
  }

  .check-input {
    margin: 0 5px;
  }
`;

export const Input = styled.input`
  width: 65%;
  padding: 6px 20px;
  font-weight: 400;
  border: 1px solid ${COLORS.primary};
  font-size: 16px;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 30px;
  outline-color: ${COLORS.primary};
`;
