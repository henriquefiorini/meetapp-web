import styled from 'styled-components';

import { Card } from '~/components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled(Card)`
  flex: 1 0 100%;
  height: 320px;
  margin-bottom: 24px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const Description = styled(Card)`
  flex: 1 0 100%;
  margin-bottom: 24px;

  & > * {
    display: block;
  }

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Date = styled(Card)`
  flex: 1;
  margin-right: 12px;
  margin-bottom: 24px;
`;

export const Location = styled(Card)`
  flex: 1;
  margin-bottom: 24px;
  margin-left: 12px;
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
