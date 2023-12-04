import { getMovieById } from '@/lib/actions';
import Image from 'next/image';

async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const movie = await getMovieById(id);
  return (
    <div>
      <Image
        width={360}
        height={550}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className='object-contain rounded-2xl'
      />
      {movie.title}
    </div>
  );
}

export default page;
