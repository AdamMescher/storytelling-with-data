import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import SimpleText from '../components/SimpleText/index';
import theme from '../lib/theme';

storiesOf('SimpleText', module).add('SimpleText with text', () => (
  <ThemeProvider theme={theme}>
    <SimpleText text="91%" />
  </ThemeProvider>
));
