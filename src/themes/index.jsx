/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle } from 'styled-components';
import COLORS from './colors';
import { FONTS_SIZE } from './fonts';

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280,
};

// const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(
//   (accumulator, size) => {
//     (accumulator)[size] = (a, b, c) => css`
//       @media (max-width: ${(MEDIA_WIDTHS)[size]}px) {
//         ${css(a, b, c)}
//       }
//     `
//     return accumulator
//   },
//   {}
// )
const INPUT_WIDTH = {
  input_small: '380px',
  input_medium: '512px',
  input_large: '810px',
};

const theme = () => ({
  COLORS,
  FONTS_SIZE,
  grids: {
    sx: 8,
    sm: 16,
    md: 24,
    lg: 32,
  },

  INPUT_WIDTH,
  // media queries
  // mediaWidth: mediaWidthTemplates
});

export default function ThemeProvider({ children }) {
  return <StyledComponentsThemeProvider theme={theme()}>{children}</StyledComponentsThemeProvider>;
}

export const ThemedGlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
}

p {
  margin: 0;
}

a { 
  color: #000;
}

body {
  font-family: 'Poppins', system-ui, -apple-system, 
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", 
  "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", 
  "Segoe UI Symbol", "Noto Color Emoji";
  background-color: ${({ theme }) => theme.COLORS.white};
  min-height: 100vh;
  height: 100%;
  margin: 0;
  padding: 0;
  #root {
    width: 100%;
    height: 100%;
  }
}

}
.ant-btn {
  border-radius: .75rem;
  &.ant-btn-primary {
    background-color: #4d69fa;
    border-color: #4d69fa;
  }

  &.ant-btn-primary[disabled] {
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }
}

.ant-input {
  font-size: .8rem;
  font-weight: 600;
  border: 1px solid #f8f9fa;
  background-color: #f8f9fa;
  border-radius: 1rem !important;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus, &:hover {
    color: #323232;
    background-color: #f8f9fa;
    border-color: #b6aee9;
    outline: 0;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 0 0.25rem rgb(108 93 211 / 25%);
  }
}

.ant-carousel {
  .slick-dots {
    li {
      width: 30px;

      button {
        height: 10px;
        background: #1980ff;

        &:hover {
          background: ${COLORS.secondary};
        }
      }
    }

    li.slick-active {
      width: 40px;
    }

    li.slick-active button {
      background: #1980ff;
      opacity: 1;
    }
  }

  .slick-dots-bottom {
    bottom: 0;
  }
}
`;
