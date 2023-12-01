import { Movie } from '@/type';
import Image from 'next/image';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div key={movie.id} className='relative'>
      <Image
        width={360}
        height={550}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className='object-contain'
      />
    </div>
  );
}

export default MovieCard;
