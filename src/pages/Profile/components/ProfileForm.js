import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input, Button } from '~/components';

import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
});

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const isLoading = useSelector(state => state.user.isLoading);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
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
      <Button positive type="submit" disabled={isLoading}>
        Save Changes
      </Button>
    </Form>
  );
}

export default Profile;
