import styled from "styled-components";

export const Wrapper = styled.div`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
  }
  section .imgBx {
    position: relative;
    width: 50%;
    height: 100%;
  }
  section .imgBx:before {
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
  section .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  section .contentBx {
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  section .contentBx .formBx {
    width: 60%;
  }
  section .contentBx .formBx h2 {
    color: #607d8b;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid #1890ff;
    display: inline-block;
    letter-spacing: 1px;
  }

  section .contentBx .formBx .inputBx {
    margin-bottom: 20px;
  }
  section .contentBx .formBx span {
    align-items: center;
    font-size: 16px;
    color: #607d8b;
    display: flex;
    font-weight: 300;
    letter-spacing: 1px;
  }
  section .contentBx .formBx span p {
    color: red;
  }
  section .contentBx .formBx .inputBx .error {
    width: 100%;
    height: 10px;
    color: red;
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
  }
  section .contentBx .formBx input {
    width: 60%;
    padding: 6px 20px;
    font-weight: 400;
    border: 1px solid #1890ff;
    font-size: 16px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
    outline-color: #1890ff;
  }
  section .contentBx .formBx .inputBx input[type="submit"] {
    background-color: #1890ff;
    color: #fff;
    border: none;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 5px 5px 10px #888888;
  }
  section .contentBx .formBx .inputBx input[type="submit"]:hover {
    background: #f53677;
  }

  section .contentBx .formBx .inputBx p {
    display: flex;
    justify-content: flex-end;
    color: #607d8b;
  }
  section .contentBx .formBx .inputBx p a {
    color: #1890ff;
  }
  .gender-input {
    height: 15px;
    width: 20px !important;
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    section .imgBx {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    section .contentBx {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
    section .contentBx .formBx {
      width: 100%;
      padding: 29px;
      background-color: rgb(255, 255, 255, 0.9);
      margin: 31px;
    }
  }
`;
