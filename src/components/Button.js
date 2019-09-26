import styled from 'styled-components';

const Button = styled.button.attrs(({ type = 'button' }) => ({
  type,
}))``;

export default Button;
