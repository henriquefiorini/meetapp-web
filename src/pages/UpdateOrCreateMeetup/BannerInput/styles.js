import styled from 'styled-components';
import { darken } from 'polished';
import { MdImage } from 'react-icons/md';

export const Wrapper = styled.label`
  margin-bottom: 8px;
`;

export const Label = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 320px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-color: #eff3f5;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: ${darken(0.025, '#eff3f5')};
  }
`;

export const Icon = styled(MdImage).attrs({
  size: 40,
})`
  margin-right: 12px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input.attrs({
  type: 'file',
  accept: 'img/*',
})`
  display: none;
`;
