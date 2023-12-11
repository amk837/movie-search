'use client';

import React from 'react';

import ContentLayout from '../../layouts/content-layout';
import { ROUTES } from '../../utils/constants';
import { getLatestMovies, getPopularMovies, getTopMovies } from '../../redux/nodes/features/movies/service';
import { latestMoviesSelector, popularMoviesSelector, topMoviesSelector } from '../../redux/nodes/features/movies/slice';
import MovieList from '../../components/movie-list';

export default function Home() {
  return (
    <ContentLayout>
      <MovieList listName='Latest Movies' href={ROUTES.latestMovies.path} service={getLatestMovies} selector={latestMoviesSelector} />
      <MovieList listName='Popular Movies' href={ROUTES.popularMovies.path} service={getPopularMovies} selector={popularMoviesSelector} />
      <MovieList listName='Top Movies' href={ROUTES.topMovies.path} service={getTopMovies} selector={topMoviesSelector} />
    </ContentLayout>
  );
}
