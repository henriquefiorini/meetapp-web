import styled from 'styled-components';
import { lighten } from 'polished';

import Input from './Input';

export const StyledInput = styled(Input)`
  display: inline-block;
  height: 44px;
  padding-right: 16px;
  padding-left: 16px;
  background-color: white;
  border: 1px solid #ccd9df;
  border-radius: 4px;
  line-height: 44px;
  transition: all 0.1s linear 0s;

  &:focus {
    border-color: transparent;
    box-shadow: 0px 0px 0px 2px inset #0f7ad8;
  }

  &[disabled],
  &:disabled {
    background-color: #ebebe4;
    color: #545454;
  }

  &::placeholder {
    color: ${lighten(0.45, '#545454')};
  }
`;
