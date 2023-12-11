'use client';

import React from 'react';
import {
  Button, Stack,
} from '@mui/material';
import Link from 'next/link';
import styled from '@emotion/styled';
import { ROUTES } from '../../utils/constants';
import ContentLayout from '../../layouts/content-layout';
import theme from '../../theme';

const NavButton = styled.div`
  padding: 8px;
  width: auto;
  color: ${theme.palette.info.main};
  &: hover {
    background: ${theme.palette.action.hover};
    color: ${theme.palette.primary.main};
  }
`;

function Header() {
  const isLoggedIn = false;
  return (
    <ContentLayout>
      <Stack direction='row' justifyContent='space-between' pt={1} mb={1}>
        <Link href={ROUTES.search.path}>
          <NavButton>
            Search Movies
          </NavButton>
        </Link>

        <Stack direction='row' justifyContent='end' flex={1} mr={1}>
          <Link href={ROUTES.home.path}>
            <NavButton>Home</NavButton>
          </Link>

          <Link href={ROUTES.latestMovies.path}>
            <NavButton>Latest</NavButton>
          </Link>

          <Link href={ROUTES.popularMovies.path}>
            <NavButton>Popular</NavButton>
          </Link>

          <Link href={ROUTES.topMovies.path}>
            <NavButton>Top rated</NavButton>
          </Link>

        </Stack>
        {isLoggedIn ? <Button>Log out</Button> : (
          <Link href={ROUTES.auth.path}>
            <Button color='primary' variant='contained'>Login</Button>
          </Link>
        )}
      </Stack>
    </ContentLayout>
  );
}

export default Header;
