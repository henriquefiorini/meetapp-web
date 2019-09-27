import styled, { css } from 'styled-components';
import { darken } from 'polished';

const Button = styled.button.attrs(({ type = 'button' }) => ({
  type,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #f36;
  color: #fff;
  font-weight: 600;
  user-select: none;

  &:hover,
  &:focus {
    background-color: ${darken(0.025, '#f36')};
  }

  &:active {
    background-color: ${darken(0.05, '#f36')};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: default;

      &:hover,
      &:focus,
      &:active {
        background-color: #f36;
      }
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: #eee;
      color: black;

      &:hover,
      &:focus {
        background-color: ${darken(0.025, '#eee')};
      }
      &:active {
        background-color: ${darken(0.05, '#eee')};
      }
    `}
`;

export default Button;
