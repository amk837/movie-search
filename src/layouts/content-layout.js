'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { node } from 'prop-types';

function ContentLayout({ children }) {
  return (
    <Stack sx={{ width: '80%', margin: 'auto' }}>
      {children}
    </Stack>
  );
}

ContentLayout.defaultProps = { children: null };
ContentLayout.propTypes = { children: node };
export default ContentLayout;
