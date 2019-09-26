import React from 'react';
import * as Yup from 'yup';

import { Page, Form, Input } from '~/components';

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
    <Page size="condensed" align="center">
      <p>SignIn Page</p>
      <Form validationSchema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <button type="submit">Enviar</button>
      </Form>
    </Page>
  );
}

export default SignIn;
