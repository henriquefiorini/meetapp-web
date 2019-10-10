import styled from 'styled-components';
import { darken } from 'polished';
import { MdPhotoCamera } from 'react-icons/md';

export const Wrapper = styled.label`
  margin-right: auto;
  margin-left: auto;
`;

export const Label = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
`;

export const Image = styled.div`
  display: flex;
  width: 160px;
  height: 160px;
  background-image: ${props =>
    props.url
      ? `url(${props.url})`
      : 'url(https://api.adorable.io/avatars/160/abott@adorable.png)'};
  background-size: cover;
  background-position: center;
  background-color: #eff3f5;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: ${darken(0.025, '#eff3f5')};
  }
`;

export const Overlay = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transition: all 0.2s linear 0s;

  ${Image}:hover & {
    opacity: 1;
  }
`;

export const Icon = styled(MdPhotoCamera).attrs({
  size: 32,
})`
  margin-bottom: 8px;
`;

export const Text = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

export const Input = styled.input.attrs({
  type: 'file',
  accept: 'img/*',
})`
  display: none;
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  font-weight: normal;
`;
