import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Header, Card } from './styles';

function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Container>
        <Header>Logo</Header>
        <Card>{children}</Card>
      </Container>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default AuthLayout;
