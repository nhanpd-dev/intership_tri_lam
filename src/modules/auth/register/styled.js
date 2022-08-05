import styled from 'styled-components';

import COLORS from '../../../themes/colors';

export const Wrapper = styled.div`
  .submit-register {
    display: flex;
    justify-content: flex-end;
    margin: 20px 0px 10px 0;
  }

  .login-help {
    display: flex;
    justify-content: flex-end;
  }

  .mr-icon {
    margin-right: 5px;
  }

  .ml-10 {
    margin-left: 10px;
  }

  .logo-register {
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
      background: ;
      z-index: 1;
      mix-blend-mode: screen;
      background: ${COLORS.background};
    }

    .logo_register-focus {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ScreenRegister = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    .logo-register{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
`;

export const FormRegister = styled.div`
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

export const ContentRegister = styled.div`
  width: 80%;

  .text_header-register {
    text-align: center;
    color: #607d8b;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-right: 20px;
    border-bottom: 4px solid ${COLORS.primary};
    display: inline-block;
    letter-spacing: 1px;
  }

  .back-home {
    text-align: center;
    color: #607d8b;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-right: 20px;
    border-bottom: 4px solid #97cdff;
    display: inline-block;
    letter-spacing: 1px;

    &:hover {
      border-bottom: 4px solid ${COLORS.primary};
      color:  ${COLORS.primary};
    }
  }

  .content_register-focus {
    align-items: center;
    width: 200px;
    font-size: 16px;
    color: #607d8b;
    display: flex;
    font-weight: 300;
    letter-spacing: 1px;

    .red-color {
      color: #ff0000;
    }
  }

  @media (max-width: 768px) {

    {
      width: 100%;
      padding: 29px;
      background-color: #ffffffe6;
      margin: 31px;
      border-radius: 5px;
    }

    .content_register-focus {
      width: 120px;
    }
`;

export const Error = styled.div`
  display: flex;

  .mr-error {
    width: 350px;
    height: 1px;
  }

  .title-error {
    width: 100%;
    height: 3px;
    color: #ff0000;
  }

  @media (max-width: 768px) {
    .mr-error {
      width: 28px;
      height: 20px;
    }
  }
`;

export const Button = styled.button`
  width: 30%;
  padding: 6px 20px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 30px;
  background-color: ${COLORS.primary};
  color: #fff;
  border: none;
  font-weight: 400;
  cursor: pointer;
  box-shadow: 5px 5px 10px #888888;

  @media (max-width: 768px) {
    width: 40%;
  }

  &:hover {
    background: #f53677;
  }
`;
