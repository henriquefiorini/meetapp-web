import styled from 'styled-components';

export const Card = styled.div`
  display: block;
  margin-right: auto;
  margin-bottom: 48px;
  margin-left: auto;
  padding: 32px;
  max-width: 640px;
  width: 100%;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 3px 3px rgba(12, 52, 75, 0.05);
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Text = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
`;

export const AvatarInput = styled.div`
  display: flex;

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
        background-color: rgba(12, 52, 75, 0.8);
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
    background-color: rgba(12, 52, 75, 0.6);
    color: white;
    font-size: 13px;
    font-weight: 700;

    svg {
      margin-right: 4px;
    }
  }
`;
