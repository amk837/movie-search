'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { node } from 'prop-types';
import { Provider } from 'react-redux';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Header from '../components/header';
import Initializer from '../hoc/initializer';
import store from '../redux/store';
import theme from '../theme';

const inter = Inter({ subsets: ['latin'] });

const Separator = styled.div`
  height: 20px;
  background: linear-gradient(to bottom, #0b0d14, #1e2129);
`;

export default function RootLayout({ children = null }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>
          <Initializer>
            <Box width='100vw' height='100vh'>
              <div style={{
                position: 'sticky',
                top: 0,
                backgroundColor: theme.palette.background.default,
              }}
              >
                <Header />
              </div>
              <Separator />
              {children}
            </Box>
          </Initializer>
        </Provider>
      </body>
    </html>
  );
}

RootLayout.propTypes = { children: node };
