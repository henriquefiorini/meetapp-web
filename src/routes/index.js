import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import {
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
  Dashboard,
  Profile,
} from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forgot" component={ForgotPassword} />
      <Route exact path="/reset/:token" component={ResetPassword} />
      <Route exact path="/" isPrivate component={Dashboard} />
      <Route exact path="/profile" isPrivate component={Profile} />
    </Switch>
  );
}
