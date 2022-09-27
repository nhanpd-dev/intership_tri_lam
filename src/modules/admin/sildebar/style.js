import styled from 'styled-components';
import { Typography, List } from 'antd';

const { Link } = Typography;

export const WrapperSidebar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 100%;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  width: 250px;
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
`;

export const Logo = styled(Link)`
  display: block;
  text-align: center;
  background: transparent;
  color: #fff;
  font-weight: 600;
  font-size: 1.5 rem;

  & > img {
    width: 120px;
  }

  & > div {
    letter-spacing: 2px;
  }
`;

export const LightLine = styled.hr`
  flex-shrink: 0;
  border-top: 0px solid #00000014;
  border-right: 0px solid #00000014;
  border-left: 0px solid #00000014;
  height: 0.0625rem;
  margin 1rem 0px;
  border-bottom: none;
  opacity: 0.25;
  background-color: transparent;
  background-image: linear-gradient(to right, #ffffff00, #fff, #ffffff00);
`;

export const ItemContent = styled(List.Item)`
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    cursor: pointer;
  }

  &.active {
    background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));
  }
`;
