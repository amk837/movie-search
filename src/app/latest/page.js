'use client';

import React from 'react';

import ContentLayout from '../../layouts/content-layout';
import MovieList from '../../components/movie-list';
import { getLatestMovies } from '../../redux/nodes/features/movies/service';
import { latestMoviesSelector } from '../../redux/nodes/features/movies/slice';

export default function TopMovies() {
  return (
    <ContentLayout>
      <MovieList listName='Latest Movies' service={getLatestMovies} selector={latestMoviesSelector} />
    </ContentLayout>
  );
}
