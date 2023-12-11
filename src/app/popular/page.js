'use client';

import React from 'react';

import ContentLayout from '../../layouts/content-layout';
import MovieList from '../../components/movie-list';
import { getPopularMovies } from '../../redux/nodes/features/movies/service';
import { popularMoviesSelector } from '../../redux/nodes/features/movies/slice';

export default function TopMovies() {
  return (
    <ContentLayout>
      <MovieList listName='Popular Movies' service={getPopularMovies} selector={popularMoviesSelector} />
    </ContentLayout>
  );
}
