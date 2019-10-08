import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button as StyledButton } from './styles';

function Button({ path, primary, positive, negative, children, ...rest }) {
  const buttonProps = {
    as: path ? Link : 'button',
    to: path,
    ...(primary && { primary: 'true' }),
    ...(positive && { positive: 'true' }),
    ...(negative && { negative: 'true' }),
    ...rest,
  };
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
}

Button.propTypes = {
  path: PropTypes.string,
  primary: PropTypes.bool,
  positive: PropTypes.bool,
  negative: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Button.defaultProps = {
  path: null,
  primary: false,
  positive: false,
  negative: false,
  children: 'Button',
};

export default Button;
