import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  width: ${props => {
    if (props.size === 'condensed') return '360px';
    if (props.size === 'fullWidth') return '100%';
    return '960px';
  }};
  max-width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const Content = styled.main`
  display: block;
`;
