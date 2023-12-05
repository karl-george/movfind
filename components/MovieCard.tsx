import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from './MotionDiv';

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

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <MotionDiv
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.5, delay: index * 0.25, ease: 'easeInOut' }}
      viewport={{ amount: 0 }}
    >
      <div className='relative'>
        <Link href={`/movie/${movie.id}`}>
          <Image
            width={360}
            height={550}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className='object-contain rounded-2xl'
          />
          <p className='text-white'>{index}</p>
        </Link>
      </div>
    </MotionDiv>
  );
}

export default MovieCard;
