import React from 'react';
import { useSelector } from 'react-redux';

import { Navigation, Container, Logo, Menu, NavLink, Avatar } from './styles';

export default function TopBar() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Navigation>
      <Container>
        <Logo to="/" />
        <Menu>
          <NavLink to="/">Dashboard</NavLink>
          <Avatar src={profile && profile.avatar && profile.avatar.url} />
        </Menu>
      </Container>
    </Navigation>
  );
}
