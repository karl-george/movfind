import {
  getGenres,
  getMovies,
  getMoviesByCountry,
  getMoviesByYearRange,
} from '@/lib/actions';

export default async function Home() {
  const data = await getMovies();
  const { genres } = await getGenres();
  // const { results } = await getMoviesByYearRange('1990', '2000');
  const { results } = await getMoviesByCountry('cn');

  return (
    <main>
      Main
      {/* {data.results.map((movie: any) => (
        <div>{movie.title}</div>
      ))} */}
      {/* {genres.map((genre: any) => (
        <div>{genre.name}</div>
      ))} */}
      {/* {results.map((moviebyYear: any) => (
        <div>{moviebyYear.title}</div>
      ))} */}
      {/* {results.map((moviebyCountry: any) => (
        <div>{moviebyCountry.title}</div>
      ))} */}
    </main>
  );
}
