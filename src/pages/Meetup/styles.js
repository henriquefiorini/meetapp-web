import styled from 'styled-components';

import { Card } from '~/components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, 444px);
  grid-template-areas: 'image image' 'date location' 'description description';

  & > * {
    overflow: hidden;
  }
`;

export const Image = styled(Card)`
  grid-area: image;

  height: 320px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const Date = styled(Card)`
  grid-area: date;
`;

export const Location = styled(Card)`
  grid-area: location;
`;

export const Description = styled(Card)`
  grid-area: description;
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
