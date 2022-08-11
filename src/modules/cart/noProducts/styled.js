import styled from 'styled-components';

export const NotProducts = styled.div`
  .cart {
    height: 100%;
    background: #fff;
    padding: 60px 0;

    .cart_content {
      justify-content: center;

      .cart_content-img {
        width: 190px;
        height: 160px;
        object-fit: cover;
      }

      .cart_content-title {
        margin: 15px 0px 30px;
      }

      .cart_content-button {
        background-color: rgb(253, 216, 53);
        color: rgb(74, 74, 74);
        font-weight: 500;
        padding: 0px 50px;
        display: inline-block;
        border-radius: 4px;
      }
    }
  }
`;
