import { createGlobalStyle } from 'styled-components';
import { size } from 'polished';

const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;
  }

  body {
    ${size('100vh', '100%')};
    text-rendering: optimizeSpeed;
    font-family: 'Roboto';
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.grey};
    margin: 0;
    padding: 0;
  }

  #root {
    ${size('100%')};
  }

  /* https://piccalil.li/blog/a-modern-css-reset/ */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  h1,
  h2,
  h3,
  h4,
	h5,
	h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button,
  a {
    background-color: transparent;
    text-align: left;
    padding: 0;
    border: 0;
    text-decoration: none;
    cursor: pointer;
  }

  [hidden] {
    display: none;
  }


`;

export default GlobalStyle;
