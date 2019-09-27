import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Group,
  Item,
  Logo,
  NavLink,
  Profile,
  Avatar,
  Name,
} from './styles';

export default function TopBar() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Group>
        <Item>
          <Logo />
        </Item>
        <Item>
          <NavLink to="/">Dashboard</NavLink>
        </Item>
      </Group>
      <Group>
        <Item>
          <Profile to="/profile">
            <Avatar
              alt=""
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://api.adorable.io/avatars/40/abott@adorable.png'
              }
            />
            <Name>{profile.name}</Name>
          </Profile>
        </Item>
      </Group>
    </Container>
  );
}
