import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Page, Form, Input, Button } from '~/components';

import { resetPasswordRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  password: Yup.string().required(),
  passwordConfirmation: Yup.string().when('password', (password, field) =>
    password
      ? field.required().oneOf([Yup.ref('password')], 'Passwords must match')
      : field,
  ),
});

function ForgotPassword({ match }) {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.auth.isLoading);

  function handleSubmit({ password, passwordConfirmation }) {
    const { token } = match.params;
    dispatch(resetPasswordRequest(token, password, passwordConfirmation));
  }

  return (
    <Page title="Change your password">
      <Form validationSchema={schema} onSubmit={handleSubmit}>
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
          Change password
        </Button>
      </Form>
    </Page>
  );
}

ForgotPassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string,
    }),
  }).isRequired,
};

export default ForgotPassword;
