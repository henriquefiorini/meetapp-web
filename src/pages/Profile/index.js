import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Page, Form, Input, Button } from '~/components';

import { signOut } from '~/store/modules/auth/actions';

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const isLoading = useSelector(state => state.user.isLoading);

  function handleSubmit() {
    console.tron.log('');
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Page title="Profile">
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          label="Full name"
          placeholder="What's your full name/"
        />
        <Input
          name="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
          readonly
          disabled
        />
        <Button type="submit" disabled={isLoading}>
          Update profile
        </Button>
      </Form>
      <Button onClick={handleSignOut}>Sign out</Button>
    </Page>
  );
}

export default Profile;
