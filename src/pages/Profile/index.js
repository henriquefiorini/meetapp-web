import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Page, Button } from '~/components';

import { signOut } from '~/store/modules/auth/actions';

import { Card, Title, Text } from './styles';

import AvatarForm from './AvatarForm';
import ProfileForm from './ProfileForm';
import PasswordForm from './PasswordForm';

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Page>
      <Card>
        <Title>Profile picture</Title>
        <AvatarForm initialData={profile} />
      </Card>
      <Card>
        <Title>Personal information</Title>
        <ProfileForm initialData={profile} />
      </Card>
      <Card>
        <Title>Change password</Title>
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
        <Title>Disconnect</Title>
        <Button onClick={handleSignOut}>Sign out from MeetApp</Button>
      </Card>
    </Page>
  );
}

export default Profile;
