import React from 'react';
import PropTypes from 'prop-types';

import { TopBar } from '~/components';

import { Layout, Content } from './styles';

function DefaultLayout({ children }) {
  return (
    <Layout>
      <TopBar />
      <Content>{children}</Content>
    </Layout>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default DefaultLayout;
