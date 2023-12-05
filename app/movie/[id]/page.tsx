import { getMovieById, getRecommendations } from '@/lib/actions';
import Image from 'next/image';

async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const movie = await getMovieById(id);
  const recommendations = await getRecommendations(id);

  return (
    <section>
      {/* Backdrop */}
      <div className='w-full md:h-[350px] lg:h-[450px] relative'>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className='object-cover'
          fill
        />
      </div>
      {/* Movie Details */}
      <div className='flex justify-center items-center my-32 md:my-20 flex-col lg:flex-row gap-12'>
        <Image
          width={360}
          height={550}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='object-contain rounded-2xl'
        />
        <div className='flex flex-col gap-6 lg:gap-4'>
          <h1 className='text-4xl text-textHeadline text-center lg:text-left'>
            {movie.title}
          </h1>
          <h2 className='text-textHeadline text-xl text-center lg:text-left'>
            {movie.tagline}
          </h2>
          <p className='text-textParagraph max-w-md'>{movie.overview}</p>
          <div className='flex flex-row gap-4 text-textParagraph'>
            <p className='text-textHeadline min-w-[65px]'>Genre</p>
            {movie.genres.map((genre: { id: string; name: string }) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <div className='flex flex-row gap-4 text-textParagraph'>
            <p className='text-textHeadline  min-w-[65px]'>Date</p>
            <p>{movie.release_date}</p>
          </div>
          <div className='flex flex-row gap-4 text-textParagraph'>
            <p className='text-textHeadline  min-w-[65px]'>Runtime</p>
            <p>{movie.runtime} min</p>
          </div>
          <div className='flex flex-row gap-4 text-textParagraph'>
            <p className='text-textHeadline  min-w-[65px]'>Rating</p>
            <p>{movie.vote_average}</p>
          </div>
        </div>
      </div>
      {/* Comments */}
      <h2 className='text-textHeadline text-center text-4xl my-8'>Comments</h2>
      {/* Recommendations */}
      <h2 className='text-textHeadline text-center text-4xl my-8'>
        Similar Movies
      </h2>
      <div className='container grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center'>
        {recommendations.slice(0, 6)}
      </div>
    </section>
  );
}

export default page;
