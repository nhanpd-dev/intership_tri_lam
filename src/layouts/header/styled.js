import styled from 'styled-components';

import COLORS from '../../themes/colors';

export const Header = styled.div`
  .mt-20 {
    margin-top: 20px;
  }

  #header_layout {
    width: 100%;
    height: 100px;
    background-color: ${COLORS.primary};
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Logo = styled.div`

    .logo_tiki {
      width: 60px;
      height: 40px;
      margin-bottom: 20px;

      .logo_tiki-img {
        width: 100%;
        height: 100%;
      }

      .logo_freeship-img {
        width: 82px;
        height: 12px;
      }
    }
  }
`;

export const Search = styled.div`
  display: flex;
  position: relative;

  .search_input {
    width: 620px;
    height: 40px;
    padding: 10px;
    border: none;

    &:focus,
    &:hover {
      box-shadow: 0 1px 2px #00000014, 0 0 0 0.15rem #e6d485f2;
    }
  }

  .search_btn {
    background-color: #0d5cb6;
    width: 120px;
    position: absolute;
    height: 40px;
    border: none;
    right: 0px;
    color: #ffffff;
    border-radius: 0 16px 16px 0;

    &:hover {
      background: #f53677;
    }
  }
`;
