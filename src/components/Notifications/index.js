import React, { useRef, useState, useEffect, useMemo } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { Api } from '~/services';

import {
  Wrapper,
  Badge,
  Icon,
  Menu,
  Scrollable,
  Notification,
  Content,
  Time,
  Empty,
} from './styles';

function Notifications() {
  const ref = useRef();

  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const hasUnread = useMemo(() => !!notifications.find(n => !n.readAt), [
    notifications,
  ]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await Api.get('notifications');
      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: enUS },
        ),
      }));
      setNotifications(data);
    }

    loadNotifications();
  }, []);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (ref.current.contains(e.target)) {
        return;
      }
      setIsVisible(!isVisible);
    }

    if (isVisible) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [isVisible]);

  async function handleMarkAsRead(id) {
    await Api.put(`notifications/${id}/read`);
    setNotifications(
      notifications.map(notification =>
        notification._id === id
          ? { ...notification, readAt: new Date() }
          : notification,
      ),
    );
  }

  return (
    <Wrapper ref={ref}>
      <Badge onClick={() => setIsVisible(!isVisible)} hasUnread={hasUnread}>
        <Icon />
      </Badge>
      <Menu isVisible={isVisible}>
        <Scrollable>
          {notifications && notifications.length > 0 ? (
            notifications.map(notification => (
              <Notification
                key={notification._id}
                unread={!notification.readAt}
                onClick={() => handleMarkAsRead(notification._id)}
              >
                <Content>{notification.content}</Content>
                <Time>{notification.timeDistance}</Time>
              </Notification>
            ))
          ) : (
            <Empty>You don&apos;t have any notifications</Empty>
          )}
        </Scrollable>
      </Menu>
    </Wrapper>
  );
}

export default Notifications;
