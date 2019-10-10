import styled from 'styled-components';
import { Form as Unform } from '@rocketseat/unform';

const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  label {
    color: #0c344b;
    font-weight: 600;

    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  input,
  textarea,
  span,
  small {
    margin-top: 8px;
  }

  span {
    color: #ff4f56;
    font-size: 12px;
  }

  button {
    margin-top: 16px;
  }
`;

export default Form;
