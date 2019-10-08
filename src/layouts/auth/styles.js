import styled from 'styled-components';

import { Card as StyledCard } from '~/components';

export const Layout = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 440px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  text-align: center;
`;

export const Logo = styled.h1`
  margin-top: 48px;
  color: #0c344b;
  font-family: Rancho;
  font-size: 40px;
  user-select: none;
  cursor: default;
`;

export const Card = styled(StyledCard)`
  margin-bottom: 48px;

  h1 {
    margin-right: auto;
    margin-left: auto;
  }
`;
