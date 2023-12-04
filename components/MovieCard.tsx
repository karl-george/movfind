import Image from 'next/image';
import Link from 'next/link';

export interface MovieProp {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieCardProps {
  movie: MovieProp;
  index: number;
}

function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <div className='relative'>
      <Link href={`/movie/${movie.id}`}>
        <Image
          width={360}
          height={550}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='object-contain rounded-2xl'
        />
      </Link>
    </div>
  );
}

export default MovieCard;
