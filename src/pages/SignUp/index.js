import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Page, Form, Input, Button } from '~/components';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
});

function SignUp() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Page title="Create your free account" size="fullWidth">
      <Form validationSchema={schema} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          label="Full name"
          placeholder="What's your full name?"
        />
        <Input
          name="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="Enter 6 characters or more"
        />
        <Button type="submit" disabled={isLoading}>
          Create an Account
        </Button>
      </Form>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </Page>
  );
}

export default SignUp;
