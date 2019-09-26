import React from 'react';
import * as Yup from 'yup';

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
  function handleSubmit(data, { resetForm }) {
    alert(JSON.stringify(data));
    resetForm();
  }

  return (
    <Page title="Sign In" size="condensed" align="center">
      <Form validationSchema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <Button type="submit">Enviar</Button>
      </Form>
    </Page>
  );
}

export default SignIn;
