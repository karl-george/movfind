import { getGenres, getMovies, getMoviesByYearRange } from '@/lib/actions';

export default async function Home() {
  const data = await getMovies();
  const { genres } = await getGenres();
  const { results } = await getMoviesByYearRange('1990', '2000');

  return (
    <main>
      {/* {data.results.map((movie: any) => (
        <div>{movie.title}</div>
      ))} */}
      {/* {genres.map((genre: any) => (
        <div>{genre.name}</div>
      ))} */}
      {/* {results.map((moviebyYear: any) => (
        <div>{moviebyYear.title}</div>
      ))} */}
    </main>
  );
}
