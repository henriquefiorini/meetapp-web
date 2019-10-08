import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import {
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
  Dashboard,
  Meetup,
  Profile,
  UpdateOrCreateMeetup,
} from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/reset/:token" component={ResetPassword} />
      <Route exact path="/" isPrivate component={Dashboard} />
      <Route exact path="/meetup/:id" isPrivate component={Meetup} />
      <Route path="/create" isPrivate component={UpdateOrCreateMeetup} />
      <Route
        path="/meetup/:id/edit"
        isPrivate
        component={UpdateOrCreateMeetup}
      />
      <Route path="/profile" isPrivate component={Profile} />
    </Switch>
  );
}
