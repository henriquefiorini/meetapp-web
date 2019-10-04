import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
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
  flex-shrink: 0;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const Link = styled(NavLink).attrs({
  activeClassName: 'active',
  exact: true,
})`
  display: flex;
  align-items: center;
  margin-right: 24px;
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

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 16px;
  background-color: #ccd9df;
`;
