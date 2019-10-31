import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import reset from 'styled-reset'
import StyledPage from './styled';
import Meta from '../Meta/index';
import theme from '../../lib/theme';

// eslint-disable-next-line
createGlobalStyle`
  ${reset}
`

const Page = ({ 
  children 
}) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      {/* eslint-disable-next-line */}
      {children}
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page;