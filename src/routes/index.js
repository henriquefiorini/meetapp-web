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
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/reset/:token" component={ResetPassword} />
      <Route exact path="/" isPrivate component={Dashboard} />
      <Route path="/profile" isPrivate component={Profile} />
    </Switch>
  );
}
