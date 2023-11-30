'use server';

export const getMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      options
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch movies');
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
    return data;
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
