import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default AuthLayout;
