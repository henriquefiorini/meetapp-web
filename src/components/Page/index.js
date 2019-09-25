import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Title, Content } from './styles';

function Page({ title, size, align, children }) {
  return (
    <Container size={size} align={align}>
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
  size: PropTypes.oneOf(['default', 'condensed', 'fullWidth']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Page.defaultProps = {
  title: null,
  size: 'default',
  align: 'left',
};

export default Page;
