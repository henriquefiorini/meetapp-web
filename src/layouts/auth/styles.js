import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 100vh;
  background-color: #eff3f5;
`;

export const Content = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 400px;
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
  padding: 32px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 3px 3px rgba(12, 52, 75, 0.05);

  h1 {
    margin-right: auto;
    margin-left: auto;
  }
`;
