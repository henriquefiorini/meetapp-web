import styled from 'styled-components';

import Form from './Form';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  label {
    font-weight: 600;

    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  input {
    margin-top: 8px;
  }

  small {
    margin-top: 8px;
    color: red;
    font-size: 13px;
  }

  button {
    margin-top: 24px;
  }
`;
