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
          <NavLink to="/profile">
            <Avatar src={profile && profile.avatar && profile.avatar.url} />
            {profile && profile.name}
          </NavLink>
        </Menu>
      </Container>
    </Navigation>
  );
}
