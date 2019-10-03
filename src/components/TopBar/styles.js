import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 64px;
  margin-bottom: 48px;
  background-color: white;
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

export const Logo = styled(Link)`
  flex-shrink: 0;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-left: 24px;
  color: black;
  font-weight: 600;
  text-transform: capitalize;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`;

export const Avatar = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 12px;
  border-radius: 16px;
  background-color: #eee;
`;
