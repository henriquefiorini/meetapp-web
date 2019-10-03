import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const StyledAvatarInput = styled.div`
  position: sticky;
  top: 24px;
  display: flex;
  align-self: flex-start;
  margin-right: 80px;

  @media (max-width: 960px) {
    position: relative;
    align-self: center;
    margin-right: 0;
    margin-bottom: 48px;
  }

  label {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0 auto;
    color: blue;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      span {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }

  img {
    width: 160px;
    height: 160px;
    margin-bottom: 16px;
    border-radius: 50%;
    background-color: #eee;
  }

  input {
    display: none;
  }

  span {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 14px;
    font-weight: 600;

    svg {
      margin-right: 4px;
    }
  }
`;

export const Panel = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;

  &:not(:first-child) {
    margin-top: 40px;
  }
`;

export const Text = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #666;
`;
