import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { Store } from '~/store';

import { DefaultLayout, AuthLayout } from '~/layouts';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const { isAuthenticated } = Store.getState().auth;

  if (!isAuthenticated && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = isAuthenticated ? DefaultLayout : AuthLayout;

  return (
    <Route
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      {...rest}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
