import styled from 'styled-components';
import COLORS from '../../../themes/colors';
import { FONTS_SIZE } from '../../../themes/fonts';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: ${FONTS_SIZE.size_12};
  }
`;

export const WrapperImg = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${COLORS.background_secodary};
    z-index: 1;
    mix-blend-mode: screen;
  }

  .img-banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`;

export const FormLogin = styled.div`
  width: 80%;

  .header-signin {
    color: ${COLORS.primary};
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid ${COLORS.primary};
    display: inline-block;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
    background-color: ${COLORS.secondary};
  }
`;

export const ButtonItem = styled.button`
  width: 100%;
  height: 50px;
  padding: 6px 20px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 30px;
  outline-color: ${COLORS.primary};
  background-color: ${COLORS.primary};
  color: #fff;
  border: none;
  font-weight: 500;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 5px 5px 10px #888888;

  &:hover {
    background: #f53677;
  }

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 414px) {
    height: 40px;
  }
`;

export const ValidationError = styled.div`
  color: red;
  width: 100%;
  height: 25px;
  margin-bottom: 10px;
`;
