import styled from 'styled-components';

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
  max-width: 480px;
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

export const Logo = styled.img``;

export const Card = styled.div`
  display: block;
  margin-bottom: 48px;
  padding: 40px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;
