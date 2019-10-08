import styled, { css } from 'styled-components';
import { darken } from 'polished';

const colors = {
  default: '#eff3f5',
  primary: '#0c344b',
  positive: '#15bd76',
  negative: '#ff4f56',
};

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 16px;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  user-select: none;

  ${props => {
    function setTheme(color) {
      return css`
        background-color: ${color};
        ${color === colors.default &&
          css`
            color: #0c344b;
          `}

        &:hover,
        &:focus {
          background-color: ${darken(0.025, color)};
        }

        &:active {
          background-color: ${darken(0.06, color)};
        }
      `;
    }

    if (props.primary) return setTheme(colors.primary);
    if (props.positive) return setTheme(colors.positive);
    if (props.negative) return setTheme(colors.negative);
    return setTheme(colors.default);
  }};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: default;

      &:hover,
      &:focus,
      &:active {
        pointer-events: none;
      }
    `};
`;
