import styled from 'styled-components';

import { Card } from '~/components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: minmax(auto, 50%) minmax(auto, 50%);
  grid-template-areas: 'image image' 'date location' 'description description';
`;

export const Image = styled(Card)`
  grid-area: image;
  height: 320px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
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

  svg {
    flex-shrink: 0;
    margin-right: 16px;
    opacity: 0.6;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;

    strong {
      margin-bottom: 4px;
    }

    p {
      flex: 1;
      min-width: 0;
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;
