import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Page, Heading, Button } from '~/components';

import { signOut } from '~/store/modules/auth/actions';

import { Card, Text } from './styles';

import AvatarForm from './components/AvatarForm';
import ProfileForm from './components/ProfileForm';
import PasswordForm from './components/PasswordForm';

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Page>
      <Card>
        <Heading>Profile picture</Heading>
        <AvatarForm initialData={profile} />
      </Card>
      <Card>
        <Heading>Personal information</Heading>
        <ProfileForm initialData={profile} />
      </Card>
      <Card>
        <Heading>Change password</Heading>
        <Text>
          <p>
            In order to <strong>protect your account</strong>, make sure your
            password:
          </p>
          <ul>
            <li>Is longer than 6 characters.</li>
            <li>
              Does not match or significantly contain your name or email, e.g.
              do not use &apos;yourname123&apos;.
            </li>
            <li>Have a mix of letters, numbers and/or special characters.</li>
          </ul>
        </Text>
        <PasswordForm initialData={profile} />
      </Card>
      <Card>
        <Heading>Disconnect</Heading>
        <Button negative onClick={handleSignOut}>
          Sign out from MeetApp
        </Button>
      </Card>
    </Page>
  );
}

export default Profile;
