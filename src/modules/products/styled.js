import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 100%;
  align-items: center;
  justify-content: center;
  margin: 4px 4%;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #f5f5fa;
  padding: 10px 0;

  .ant-pagination {
    margin: 8px 0 0 0;
  }
`;

export const Products = styled.div`
  display: flex;
  flex: 100%;
  background-color: #fff;
  flex-wrap: wrap;
`;

export const ProductItem = styled.div`
  display: flex;
  flex: 20%;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 5px 10px 5px;
  cursor: pointer;

  @media (max-width: 1023px) and (min-width: 740px) {
    flex: 20%;
  }

  @media (max-width: 739px) {
    flex: 50%;
  }

  &:hover {
    box-shadow: 0px 0px 20px #ccc;
  }

  .thumbnail {
    .ant-image {
      display: flex;
      flex: 100%;

      .ant-image-img {
        object-fit: contain;
      }
    }
  }

  .title {
    margin: 0px 0px 4px;
    font-weight: 500;
    display: -webkit-box;
    max-width: 100%;
    font-size: 14px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info {
    display: flex;
    align-items: flex-start;

    @media (max-width: 1023px) {
      flex-direction: column;
    }

    .rating {
      width: 100%;
      padding-right: 6px;
      border-right: 1px solid #ccc;

      @media (max-width: 1023px) {
        border: none;
        width: 100%;
      }

      .ant-rate {
        font-size: 16px;

        .ant-rate-star {
          cursor: pointer;
        }

        .ant-rate-star:not(:last-child) {
          margin-right: 0;
        }
      }
    }

    .sold {
      width: 50%;
      color: #787878;
      line-height: normal;
      font-size: 11px;
      padding-left: 8px;

      @media (max-width: 1023px) {
        padding-left: 0px;
        width: 100%;
      }
    }
  }

  .price {
    font-size: 14px;
    font-weight: 500;

    .discount {
      display: flex;
      flex-wrap: wrap;

      .discount-price {
        color: #ff4c57;
      }

      .discount-label {
        color: #ff4c57;
        border: 1px solid #ff4c57;
        background-color: #fff1f2;
        border-radius: 2px;
        font-weight: 400;
        margin-left: 4px;
        font-size: 12px;
      }
    }
  }
`;
