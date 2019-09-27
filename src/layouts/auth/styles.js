import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 48px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  max-width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  text-align: center;
`;

export const Logo = styled.img``;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;
