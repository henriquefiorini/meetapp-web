import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Content, Header, Card } from './styles';

function AuthLayout({ children }) {
  return (
    <Layout>
      <Content>
        <Header>Logo</Header>
        <Card>{children}</Card>
      </Content>
    </Layout>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default AuthLayout;
