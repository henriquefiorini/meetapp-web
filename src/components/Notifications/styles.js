import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { MdInbox } from 'react-icons/md';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Badge = styled.button`
  position: relative;
  display: flex;

  ${props =>
    props.hasUnread &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: -6px;
        right: -6px;
        width: 16px;
        height: 16px;
        border: 2px solid white;
        border-radius: 50%;
        background-color: #d645a7;
      }
    `}
`;

export const Icon = styled(MdInbox).attrs({ size: 20 })``;

export const Menu = styled.div`
  position: absolute;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  top: calc(100% + 4px);
  right: 0;
  width: 280px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Scrollable = styled(PerfectScrollbar)`
  max-height: 360px;
`;

export const Notification = styled.button`
  padding: 16px 20px;
  text-align: left;

  &:not(:last-child) {
    border-bottom: 1px solid #eff3f5;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: #fafafa;
  }

  ${props =>
    props.unread &&
    css`
      font-weight: 600;

      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 8px;
        border-radius: 50%;
        background-color: #d645a7;
      }
    `}
`;

export const Content = styled.div`
  font-size: 13px;
  margin-bottom: 4px;
`;

export const Time = styled.time`
  font-size: 12px;
  opacity: 0.7;
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
