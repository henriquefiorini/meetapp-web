import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Page, Form, Input, Button } from '~/components';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
});

function SignIn() {
  function handleSubmit(data) {
    alert(JSON.stringify(data));
  }

  return (
    <Page title="Sign In" size="fullWidth">
      <Form validationSchema={schema} onSubmit={handleSubmit}>
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
        <Button type="submit">Sign In</Button>
      </Form>
      <p>
        Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Page>
  );
}

export default SignIn;
