'use server';

import MovieCard, { MovieProp } from '@/components/MovieCard';
import { revalidatePath } from 'next/cache';
import { connectToDB } from './utils';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { signIn } from '../auth';
import { User } from './models';

export const getMovies = async (page: number) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
      options
    );

    const data = await response.json();
    return data.results.map((item: MovieProp, index: number) => (
      <MovieCard key={item.id} movie={item} index={index} />
    ));
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch movies');
  }
};

export const getMovieById = async (id: string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch movie');
  }
};

export const getRecommendations = async (id: string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      options
    );

    const data = await response.json();
    return data.results.map((item: MovieProp, index: number) => (
      <MovieCard key={item.id} movie={item} index={index} />
    ));
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch recommendations');
  }
};

export const getMoviesByYearRange = async (
  yearStart: string,
  yearEnd: string
) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${yearStart}&primary_release_date.lte=${yearEnd}&sort_by=popularity.desc`,
      options
    );

    const data = await response.json();
    return data.results.map((item: MovieProp, index: number) => (
      <MovieCard key={item.id} movie={item} index={index} />
    ));
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch movies by year');
  }
};

export const getMoviesByCountry = async (country: string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_origin_country=${country}&with_original_language=${country}`,
      options
    );

    const data = await response.json();
    return data.results.map((item: MovieProp, index: number) => (
      <MovieCard key={item.id} movie={item} index={index} />
    ));
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch movies by year');
  }
};

export const getGenres = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',
      options
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch genres');
  }
};

export const searchMovies = async (title: string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
      options
    );

    const data = await response.json();
    return data.results.map((item: MovieProp, index: number) => (
      <MovieCard key={item.id} movie={item} index={index} />
    ));
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch movie');
  }
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch {
    return 'Wrong credentials';
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return { users };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users!');
  }
};
