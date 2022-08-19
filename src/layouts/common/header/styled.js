import styled from 'styled-components';

import COLORS from '../../../themes/colors';
import MARGIN from '../../../themes/margin';

export const Header = styled.div`
  .mt-10 {
    margin-top: ${MARGIN.margin_top_10};
  }

  .layout_img-selector {
    width: 50%;
  }

  .title_cart {
    color: ${COLORS.background_primary};
  }

  .ant-input {
    background-color: #fff;
    box-shadow: none;

    &:hover,
    &:focus {
      background-color: ${COLORS.white};
      padding-left: 3px;
    }
  }

  input {
    .ant-input {
      .ant-input-lg {
        padding-left: 3px;
      }
    }
  }

  .ant-input-search-button {
    &:hover {
      background-color: #f53677;
      border: none;
    }
  }

  .header_layout {
    height: 100px;
    align-items: center;
    background-color: ${COLORS.primary};

    .header_layout-content {
      align-items: center;

      .header_layout-img {
        .layout_img-selector {
          width: 70px;
          object-fit: cover;
        }
      }

      .search {
        .login_signUp {
          justify-content: flex-end;
          display: none;
          margin-top: 10px;
          color: ${COLORS.white};
          align-items: center;

          .signUp_selector,
          .login_selector {
            color: ${COLORS.white};
          }

          .login_selector {
            margin: 0 10px;
          }
        }

        @media (max-width: 768px) {
          .login_signUp {
            display: flex;
          }

          margin-top: 25px;
        }
      }
    }
  }

  .header_layout-nav {
    height: 50px;
    width: 100%;
    background: ${COLORS.background_primary};
    position: fixed;
    bottom: 0;
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

  @media (max-width: 1023px) {
    .ant-btn {
      > .anticon {
        + {
          span {
            display: none;
          }
        }
      }
      > span {
        + {
          .anticon {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .header_layout-nav {
      display: flex;
    }

    .layout_img-selector {
      width: 80%;
    }
  }
`;
