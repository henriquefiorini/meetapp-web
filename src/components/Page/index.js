import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Title, Content } from './styles';

function Page({ title, children }) {
  return (
    <Container>
      {title && (
        <Header>
          <Title>{title}</Title>
        </Header>
      )}
      <Content>{children}</Content>
    </Container>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Page.defaultProps = {
  title: null,
};

export default Page;
