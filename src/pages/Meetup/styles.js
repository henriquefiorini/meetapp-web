import styled from 'styled-components';

import { Card } from '~/components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled(Card)`
  width: 100%;
  height: 320px;
  margin-bottom: 24px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: 50%;
  border-radius: 8px;

  @media (max-width: 640px) {
    height: 240px;
  }

  @media (max-width: 440px) {
    height: 200px;
  }
`;

export const Description = styled(Card)`
  width: 100%;
  margin-bottom: 24px;

  & > * {
    display: block;
  }

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Date = styled(Card)`
  width: calc(50% - 12px);
  margin-right: 12px;
  margin-bottom: 24px;

  @media (max-width: 640px) {
    width: 100%;
    margin: 0 0 24px;
  }
`;

export const Location = styled(Card)`
  width: calc(50% - 12px);
  margin-bottom: 24px;
  margin-left: 12px;

  @media (max-width: 640px) {
    width: 100%;
    margin: 0 0 24px;
  }
`;

export const MediaObject = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    flex-shrink: 0;
    margin-right: 16px;
  }

  & > *:nth-child(2) {
    display: block;
    flex: 1;

    & > * {
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &,
    & > * {
      overflow: hidden;
    }

    & > *:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;
