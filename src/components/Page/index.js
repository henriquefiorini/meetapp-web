import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Title, Actions, Content } from './styles';

function Page({ title, actions, children }) {
  return (
    <Container>
      {(title || actions) && (
        <Header>
          {title && <Title>{title}</Title>}
          {actions && <Actions>{actions}</Actions>}
        </Header>
      )}
      <Content>{children}</Content>
    </Container>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Page.defaultProps = {
  title: null,
  actions: null,
};

export default Page;
