'use client';

import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { node } from 'prop-types';
import theme from '../theme';

function Initializer({ children = null }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

Initializer.propTypes = { children: node };

export default Initializer;
