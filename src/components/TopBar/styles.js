import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  width: 100%;
  height: 64px;
  margin-bottom: 48px;
  background-color: white;
  box-shadow: 0px 3px 3px rgba(12, 52, 75, 0.05);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;
`;

export const Logo = styled(NavLink)`
  margin: 0;
  flex-shrink: 0;
  color: #0c344b;
  font-family: Rancho;
  font-weight: normal;
  font-size: 28px;
  user-select: none;
  transition: all 250ms ease 0s;

  &:hover,
  &:active {
    color: #9f6bf4;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const Link = styled(NavLink).attrs({
  activeClassName: 'active',
  exact: true,
})`
  display: flex;
  align-items: center;
  margin-left: 24px;
  color: #7e9aa8;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 250ms ease 0s;

  &:hover,
  &:focus,
  &:active {
    color: #0c344b;
  }

  &.active {
    color: #0c344b;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 16px;
  background-color: #ccd9df;
  background-image: ${props =>
    props.src
      ? `url(${props.src})`
      : 'url(https://api.adorable.io/avatars/32/abott@adorable.png)'};
  background-size: cover;
  background-position: 50%;
`;
