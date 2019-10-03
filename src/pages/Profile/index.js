import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Page, Form, Input, Button } from '~/components';
import { Container, Panel, Title, Text } from './styles';
import AvatarInput from './AvatarInput';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string().min(6),
  password: Yup.string()
    .min(6)
    .when('oldPassword', (oldPassword, field) =>
      oldPassword ? field.required() : field,
    ),
  passwordConfirmation: Yup.string().when('password', (password, field) =>
    password
      ? field.required().oneOf([Yup.ref('password')], 'Passwords must match')
      : field,
  ),
});

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const isLoading = useSelector(state => state.user.isLoading);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Page title="Profile settings">
      <Container>
        <AvatarInput avatar={profile.avatar} />
        <Panel>
          <Form
            initialData={profile}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <Title>Personal information</Title>
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
            />

            <Title>Password</Title>
            <Text>
              <p>
                In order to <strong>protect your account</strong>, make sure
                your password:
              </p>
              <ul>
                <li>Is longer than 6 characters.</li>
                <li>
                  Does not match or significantly contain your name or email,
                  e.g. do not use &apos;yourname123&apos;.
                </li>
                <li>
                  Have a mix of letters, numbers and/or special characters.
                </li>
              </ul>
            </Text>
            <Input
              name="oldPassword"
              type="password"
              label="Old password"
              placeholder="Enter 6 characters or more"
            />
            <Input
              name="password"
              type="password"
              label="New password"
              placeholder="Enter 6 characters or more"
            />
            <Input
              name="passwordConfirmation"
              type="password"
              label="Re-enter your new password"
              placeholder="Must match the password above"
            />
            <Button type="submit" disabled={isLoading}>
              Save changes
            </Button>
          </Form>
          <Button onClick={handleSignOut}>Sign out</Button>
        </Panel>
      </Container>
    </Page>
  );
}

export default Profile;
