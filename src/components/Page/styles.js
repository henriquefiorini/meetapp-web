import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  color: #0c344b;
  font-size: 24px;
  font-weight: 400;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: auto;
  }

  & > * {
    margin-left: 16px;
  }
`;

export const Content = styled.main`
  display: block;
`;
