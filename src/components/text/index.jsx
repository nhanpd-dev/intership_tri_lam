/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.p`
  color: ${({ color, theme }) => theme.COLORS[color]};
  padding: 0;
  margin: 0;
  font-size: ${({ fontSize, theme }) => theme.FONTS_SIZE[fontSize] || '16px'};
  font-weight: ${({ fontWeight }) => `${fontWeight}` || '400'};

  @media (max-width: 896px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 414px) {
    font-size: 11px;
  }
`;

const Text = ({ fontSize, fontWeight, color = 'white', ...rest }) => (
  <TextWrapper color={color} fontSize={fontSize} fontWeight={fontWeight} {...rest} />
);

const TextError = ({ fontSize, fontWeight, color = 'red', ...rest }) => (
  <TextWrapper color={color} fontSize={fontSize} fontWeight={fontWeight} {...rest} />
);

const Label = ({ ...rest }) => <TextWrapper color='primary' {...rest} size='size_18' />;

export { Text, TextError, Label };
