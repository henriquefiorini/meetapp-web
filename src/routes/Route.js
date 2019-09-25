import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { DefaultLayout, AuthLayout } from '~/layouts';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const isAuthenticated = false;

  if (!isAuthenticated && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Redirect to="/dashboard" />;
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
