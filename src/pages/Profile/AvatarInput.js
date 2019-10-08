import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 auto;
  color: blue;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const Image = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 16px;
  border-radius: 50%;
  background-color: #ccd9df;
  background-image: ${props =>
    props.src
      ? `url(${props.src})`
      : 'url(https://api.adorable.io/avatars/160/abott@adorable.png)'};
  background-size: cover;
  background-position: 50%;
`;

export const Button = styled.span`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgba(12, 52, 75, 0.6);
  color: white;
  font-size: 13px;
  font-weight: 700;

  & > svg {
    margin-right: 4px;
  }

  ${Wrapper}:hover &,
  ${Wrapper}:focus &,
  ${Wrapper}:active & {
    background-color: rgba(12, 52, 75, 0.8);
  }
`;

export default {
  Container,
  Wrapper,
  Input,
  Image,
  Button,
};
