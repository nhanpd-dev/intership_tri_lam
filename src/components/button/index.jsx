/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Text } from '../text';

const Wrapper = styled(Button)`
  background-color: ${({ backgroundcolor, theme, disabled }) =>
    disabled ? theme.grey : theme.COLORS[backgroundcolor]} !important;

  border: ${({ theme, border }) => (border ? `1px solid ${theme[border]}` : 'none')};
  cursor: pointer;
  margin-bottom: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  height: 40px;
  border-radius: 1rem !important;

  .gVSCoE {
    @media (max-width: 896px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 414px) {
      font-size: 11px;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.COLORS.secondary} !important;
  }

  &:active {
    opacity: 0.7;
    border: ${({ border }) => (border ? `1px solid ${border}` : 'none')};
  }

  &:focus {
    opacity: 0.7;
    border: ${({ theme, border }) => (border ? `1px solid ${border}` : [theme.COLORS.white])};
  }

  &.disabled {
    cursor: auto;
    opacity: 0.5;
  }
`;
const PrimaryButton = ({
  title,
  onClick,
  disabled = false,
  backgroundcolor = 'primary',
  border,
  fontSize = 'size_17',
  fontWeight = 400,
  color = 'white',
  ...rest
}) => (
  <Wrapper border={border} backgroundcolor={backgroundcolor} disabled={disabled} onClick={onClick} {...rest}>
    {title ? (
      <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {title}
      </Text>
    ) : (
      rest.children
    )}
  </Wrapper>
);

export { PrimaryButton };
