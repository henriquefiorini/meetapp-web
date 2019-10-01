import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { SignIn, SignUp, ForgotPassword, Dashboard } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exat path="/forgot" component={ForgotPassword} />
      <Route exact path="/" isPrivate component={Dashboard} />
    </Switch>
  );
}
