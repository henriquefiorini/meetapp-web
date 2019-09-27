import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSpa } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid #eee;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-left: 24px;
  }
`;

export const Logo = styled(MdSpa).attrs({
  size: 32,
  color: 'black',
})`
  line-height: 1;
`;

export const NavLink = styled(Link)`
  color: black;
  line-height: 1;
  transition: color 0.2s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    color: #f36;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: #eee;
`;

export const Name = styled.span`
  margin-left: 8px;
  font-size: 13px;
  font-weight: 600;
  color: black;
  &:hover,
  &:focus,
  &:active {
    color: black;
  }
`;
