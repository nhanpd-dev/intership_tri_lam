/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Text } from '../text';

const Wrapper = styled(Button)`
  background-color: ${({ backgroundcolor, theme, disabled }) =>
    disabled ? theme.grey : theme.COLORS[backgroundcolor]} !important;
  padding: 8px;
  width: ${({ width }) => `${width}px` || 'max-content'};
  border-radius: 4px;
  border: ${({ theme, border }) => (border ? `1px solid ${theme[border]}` : 'none')};
  cursor: pointer;
  transition: opacity 0.2s;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

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
  <Wrapper
    width={320}
    border={border}
    backgroundcolor={backgroundcolor}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
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
