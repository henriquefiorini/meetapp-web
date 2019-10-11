import React from 'react';
import { useSelector } from 'react-redux';

import { Notifications } from '~/components';

import { Navigation, Container, Logo, Menu, Link, Avatar } from './styles';

export default function TopBar() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Navigation>
      <Container>
        <Logo to="/">MeetApp</Logo>
        <Menu>
          <Notifications />
          <Link to="/profile">
            <Avatar src={profile && profile.avatar && profile.avatar.url} />
            {profile && profile.name}
          </Link>
        </Menu>
      </Container>
    </Navigation>
  );
}
