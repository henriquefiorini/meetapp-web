import styled from 'styled-components';

import Form from './Form';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  label {
    color: #0c344b;
    font-weight: 600;

    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  input {
    margin-top: 8px;
  }

  small {
    margin-top: 8px;
    color: #f25c54;
    font-size: 12px;
  }

  button {
    margin-top: 16px;
  }
`;
