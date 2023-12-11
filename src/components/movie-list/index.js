'use client';

import React, { useEffect, useState } from 'react';
import {
  Box, Stack, Typography,
} from '@mui/material';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { func, string } from 'prop-types';
import { getMovieDataSelector } from '../../redux/nodes/entities/movies/slice';
import MovieCardSkeleton from '../movie-card/skeleton';
import MovieCard from '../movie-card';
import Pagination from '../pagination';

export default function MovieList({
  listName, href, service, selector,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const { results, page, total_pages: totalPages } = useSelector(selector);
  const allMovies = useSelector(getMovieDataSelector);
  const dispatch = useDispatch();

  const fetchMovies = async (pageToFetch = 1) => {
    setIsLoading(true);
    await dispatch(service({ page: pageToFetch }));
    setIsLoading(false);
  };

  const onPageChange = (event, newPage) => {
    fetchMovies(newPage);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <Stack>
      { href ? (
        <Link href={href}>
          <Typography color='primary' variant='h6'>{listName}</Typography>
        </Link>
      ) : <Typography color='primary' variant='h6'>{listName}</Typography>}

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
                movie={{ ...movie, href: `/${movieId}`, img: `${process.env.NEXT_PUBLIC_IMAGE_API_DOMAIN}/w500${movie.poster_path || movie.backdrop_path}` }}
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
  );
}

MovieList.propTypes = {
  service: func, selector: func, listName: string, href: string,
};
