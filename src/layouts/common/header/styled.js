import styled from 'styled-components';

import COLORS from '../../../themes/colors';

export const Header = styled.div`
  .mt-10 {
    margin-top: 10px;
  }

  .header_layout {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: ${COLORS.primary};

    .header_layout-content {
      align-items: center;

      .header_layout-img {
        .layout_img-selector {
          width: 70px;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .header_layout-nav {
    height: 50px;
    background: ${COLORS.background_primary};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #d3d1d1;
    align-items: center;
    display: none;
    z-index: 1;

    .layout_nav-icon,
    .layout_nav-title {
      justify-content: center;
    }

    .layout_nav-icon {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    .header_layout-nav {
      display: flex;
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
      background: ${COLORS.secondary};
    }
  }
`;
