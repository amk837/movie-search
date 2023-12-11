'use client';

import React from 'react';

import ContentLayout from '../../layouts/content-layout';
import { getTopMovies } from '../../redux/nodes/features/movies/service';
import { topMoviesSelector } from '../../redux/nodes/features/movies/slice';
import MovieList from '../../components/movie-list';

export default function TopMovies() {
  return (
    <ContentLayout>
      <MovieList listName='Top Movies' service={getTopMovies} selector={topMoviesSelector} />
    </ContentLayout>
  );
}
