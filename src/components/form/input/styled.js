/* eslint-disable react/prop-types */
import { Form } from "antd";
import styled from "styled-components";
export const WrapperFormItem = styled(Form.Item)`
  height: max-content;
  width: 100%;
  margin-bottom: 10px;

  .ant-input {
    min-height: 38px;
    border-radius: 4px;
  }

  .ant-form-item-label {
    font-size: 14px;
    overflow: unset;
    white-space: unset;
    .ant-form-item-no-colon {
      height: 100%;
    }
  }
`;

export const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`;
