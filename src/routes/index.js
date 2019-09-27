import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { SignIn, SignUp } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route path="/" isPrivate />
    </Switch>
  );
}
