import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input, Button } from '~/components';

import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6)
    .required(),
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

function PasswordForm() {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.user.isLoading);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input
        name="oldPassword"
        type="password"
        label="Current password"
        placeholder="Enter your current password"
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
      <Button positive type="submit" disabled={isLoading}>
        Update Password
      </Button>
    </Form>
  );
}

export default PasswordForm;
