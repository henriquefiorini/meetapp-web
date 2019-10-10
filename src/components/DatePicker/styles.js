import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledInput = styled(ReactDatePicker)`
  display: inline-block;
  width: 100%;
  height: ${props => (props.multiline ? '80px' : '44px')};
  padding-right: 16px;
  padding-left: 16px;
  background-color: white;
  border: 1px solid #ccd9df;
  border-radius: 4px;
  line-height: 44px;
  transition: all 0.1s linear 0s;

  ${props =>
    props.multiline &&
    css`
      padding-top: 12px;
      padding-bottom: 12px;
      line-height: 1.5;
      resize: none;
      overflow-y: auto;
    `}

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
