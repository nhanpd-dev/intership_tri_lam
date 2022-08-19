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
    background: ${COLORS.background_seconary};
    z-index: 1;
    mix-blend-mode: screen;
  }

  .banner {
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

  .form__header {
    color: ${COLORS.primary};
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid ${COLORS.primary};
    display: inline-block;
    letter-spacing: 1px;
  }

  .form__link,
  .form__button {
    @media (max-width: 896px) {
      font-size: ${FONTS_SIZE.size_14};
    }

    @media (max-width: 768px) {
      font-size: ${FONTS_SIZE.size_12};
    }

    @media (max-width: 414px) {
      font-size: ${FONTS_SIZE.size_11};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
    background-color: ${COLORS.background_primary};
  }
`;
