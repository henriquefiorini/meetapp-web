import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Rancho&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 100%;
    touch-action: manipulation;
  }

  body {
    background-color: #eff3f5;
    color: #3d556b;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: auto;
  }

  a {
    color: #0f7ad8;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      outline: 0;
    }
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  input,
  select,
  textarea,
  button {
    border: none;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    text-decoration: none;
    user-select: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      outline: 0;
    }
  }

  img {
    max-width: 100%;
  }

  p:not(:last-child) {
    margin-bottom: 16px;
  }

  ul {
    padding-left: 24px;

    & > li:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  abbr {
    cursor: help;
  }
`;
