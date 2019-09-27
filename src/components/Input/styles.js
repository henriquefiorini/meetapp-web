import styled from 'styled-components';

import Input from './Input';

export const StyledInput = styled(Input)`
  display: inline-block;
  height: 48px;
  padding-right: 16px;
  padding-left: 16px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 4px;
  line-height: 48px;

  &:focus {
    border-color: blue;
  }
`;
