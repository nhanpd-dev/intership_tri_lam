import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 100%;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
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
    z-index: 1;
  }

  .thumbnail {
    width: 100%;

    .ant-image {
      width: 100%;
    }
  }

  .title {
    font-size: 13px;
    margin: 0px 0px 4px;
    line-height: 20px;
    font-weight: 500;
    white-space: nowrap;
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
      display: flex;
      padding-right: 6px;
      height: 100%;
      gap: 4px;
      color: #fdd836;
      align-items: center;
      border-right: 1px solid #ccc;

      @media (max-width: 1023px) {
        border: none;
        width: 100%;
      }
    }

    .sold {
      width: 50%;
      height: 100%;
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
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;
