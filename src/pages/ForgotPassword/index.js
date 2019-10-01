import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Page, Form, Input, Button } from '~/components';

import { forgotPasswordRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
});

function ForgotPassword() {
  const dispatch = useDispatch();

  const [hasSent, setHasSent] = useState(false);
  const isLoading = useSelector(state => state.auth.isLoading);

  function handleSubmit({ email }) {
    dispatch(forgotPasswordRequest(email));
    setHasSent(true);
  }

  return (
    <Page title="Reset your password">
      {hasSent && !isLoading ? (
        <>
          <p>
            Password reset sent! You&apos;ll receive an email if you are
            registered on our system.
          </p>
          <Link to="/signin">Back to Sign In</Link>
        </>
      ) : (
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
      )}
    </Page>
  );
}

export default ForgotPassword;
