import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';

export const MeetupsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Meetup = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 24px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: white;
  color: #0c344b;
  box-shadow: 0px 3px 3px rgba(12, 52, 75, 0.05);
  transition: all 250ms ease 0s;

  &:hover {
    border-color: #9f6bf4;
    box-shadow: 0px 6px 6px rgba(12, 52, 75, 0.05);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0px 2px 3px rgba(12, 52, 75, 0.05);
    transform: translateY(1px);
  }

  @media (max-width: 440px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MeetupTitle = styled.h2`
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const MeetupDate = styled.span`
  flex-shrink: 0;
  opacity: 0.8;

  @media (max-width: 440px) {
    margin-top: 8px;
  }
`;

export const MeetupIcon = styled(MdChevronRight).attrs({
  size: 24,
})`
  flex-shrink: 0;
  margin-left: 24px;

  @media (max-width: 440px) {
    position: absolute;
    display: block;
    right: 16px;
    top: calc(50% - 12px);
    margin: 0;
  }
`;

export const Empty = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  color: #7e9aa8;
  font-family: monospace;
  font-weight: 400;
  text-align: center;
`;

export const EmptyEmoji = styled.div`
  margin-bottom: 24px;
  font-size: 80px;
  opacity: 0.7;
`;

export const EmptyText = styled.div`
  font-size: 16px;
`;
