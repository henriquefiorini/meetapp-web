import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Page, Form, Input, Button } from '~/components';

import { resetPasswordRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
});

function ResetPassword() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

  function handleSubmit({ email }) {
    dispatch(resetPasswordRequest(email));
  }

  return (
    <Page title="Reset your password here">
      <Form validationSchema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          label="Enter your email address and we will send you a link to reset your password."
          placeholder="you@example.com"
        />
        <Button type="submit" disabled={isLoading}>
          Send password reset email
        </Button>
      </Form>
    </Page>
  );
}

export default ResetPassword;
