'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { node } from 'prop-types';

function ContentLayout({ children = null }) {
  return (
    <Stack sx={{ width: '80%', margin: 'auto' }}>
      {children}
    </Stack>
  );
}

ContentLayout.propTypes = { children: node };
export default ContentLayout;
