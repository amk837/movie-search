'use client';

import React, { useEffect, useState } from 'react';
import {
  Box, Stack, Typography,
} from '@mui/material';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import ContentLayout from '../../layouts/content-layout';
import { ROUTES } from '../../utils/constants';
import { getLatestMovies } from '../../redux/nodes/features/latest-movies/service';
import { latestMoviesSelector } from '../../redux/nodes/features/latest-movies/slice';
import MovieCard from '../../components/movie-card';
import { getMovieDataSelector } from '../../redux/nodes/entities/movies/slice';
import MovieCardSkeleton from '../../components/movie-card/skeleton';
import Pagination from '../../components/pagination';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { results, page, total_pages: totalPages } = useSelector(latestMoviesSelector);
  const allMovies = useSelector(getMovieDataSelector);
  const dispatch = useDispatch();

  const fetchMovies = async (pageToFetch = 1) => {
    setIsLoading(true);
    await dispatch(getLatestMovies({ page: pageToFetch }));
    setIsLoading(false);
  };

  const onPageChange = (event, newPage) => {
    fetchMovies(newPage);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <ContentLayout>
      <Stack>
        <Link href={ROUTES.latestMovies.path}>
          <Typography color='primary' variant='h6'>Latest Movies</Typography>
        </Link>

        <Stack direction='row' flexWrap='wrap' pt={1}>
          {isLoading ? (Array(20).fill(0).map((val, index) => (
            <Box width='20%' mt={1} key={`${val}-${index + val}`}>
              <MovieCardSkeleton />
            </Box>
          ))
          ) : results.map((movieId) => {
            const movie = allMovies[movieId];
            return (
              <Box width='20%' mt={1} key={movieId}>
                <MovieCard
                  movie={{ ...movie, href: `/${movieId}`, img: `${process.env.NEXT_PUBLIC_IMAGE_API_DOMAIN}/w500${movie.poster_path}` }}
                />
              </Box>
            );
          })}
        </Stack>

        <Box flex={1} display='flex' alignItems='center' justifyContent='center' p={3}>
          <Pagination
            page={page}
            siblingCount={2}
            boundaryCount={1}
            onChange={onPageChange}
            count={totalPages}
          />
        </Box>
      </Stack>
    </ContentLayout>
  );
}
