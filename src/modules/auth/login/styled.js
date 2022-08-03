import styled from "styled-components";
import COLORS from "../../../themes/colors";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const WrapperImg = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg, #009fff, #ec2f4b);
    z-index: 1;
    mix-blend-mode: screen;
  }
  img {
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
  width: 60%;
  h2 {
    text-align: center;
    color: #607d8b;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid ${COLORS.background};
    display: block;
    letter-spacing: 1px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 29px;
    background-color: #ffffffe6;
    margin: 31px;
  }
`;

export const FormItem = styled.div`
  margin-bottom: 20px;
  p {
    align-items: center;
    font-size: 16px;
    color: #607d8b;
    display: flex;
    font-weight: 300;
    letter-spacing: 1px;
    span {
      color: red;
    }
  }
  input {
    width: 70%;
    padding: 6px 20px;
    font-weight: 400;
    border: 1px solid ${COLORS.background};
    font-size: 16px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
    outline-color: ${COLORS.background};
  }
  .link {
    display: flex;
    justify-content: flex-end;
    color: #607d8b;
  }
  .link a {
    color: ${COLORS.background};
  }
`;
export const ButtonItem = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    width: 70%;
    padding: 6px 20px;
    font-size: 16px;
    letter-spacing: 1px;
    border-radius: 30px;
    outline-color: ${COLORS.background};
    background-color: ${COLORS.background};
    color: #fff;
    border: none;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 5px 5px 10px #888888;
    &:hover {
      background: #f53677;
    }
  }
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .lock-icon {
    margin-right: 10px;
  }
  .email-icon {
    margin-right: 10px;
  }
`;
export const ValidationError = styled.div`
  width: 100%;
  height: 10px;
  color: red;
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  font-size: 10px;
`;
