import styled from 'styled-components';

import COLORS from '../../../themes/colors';

export const Wrapper = styled.div`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  .icon {
    margin-right: 10px;
  }

  .submit-register,
  .login-help {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
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
      background: linear-gradient(225deg, #009fff, #ec2f4b);
      z-index: 1;
      mix-blend-mode: screen;
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
    margin-bottom: 20px;
    border-bottom: 4px solid ${COLORS.background};
    display: inline-block;
    letter-spacing: 1px;
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
    }

    .content_register-focus {
      width: 120px;
    }
`;

export const Fields = styled.div`
  margin-bottom: 20px;

  .error {
    display: flex;
  }

  .mr-error {
    width: 350px;
    height: 1px;
  }

  .title-error {
    width: 100%;
    height: 3px;
    margin-top: 7px;
    color: #ff0000;
  }
`;

export const ContentField = styled.div`
  display: flex;
  align-items: center;

  .gender-input {
    margin: 0 10px;
  }
`;

export const Input = styled.input`
  width: 65%;
  padding: 6px 20px;
  font-weight: 400;
  border: 1px solid ${COLORS.background};
  font-size: 16px;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 30px;
  outline-color: ${COLORS.background};
`;

export const Button = styled.button`
  width: 30%;
  padding: 6px 20px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 30px;
  background-color: ${COLORS.background};
  color: #fff;
  border: none;
  font-weight: 400;
  cursor: pointer;
  box-shadow: 5px 5px 10px #888888;

  &:hover {
    background: #f53677;
  }
`;
