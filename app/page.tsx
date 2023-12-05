import { getMovies } from '@/lib/actions';
import LoadMore from '../components/LoadMore';

export default async function Home() {
  const data = await getMovies(1);

  return (
    <main className='container mt-28'>
      {/* Title */}
      <h1 className='text-textHeadline text-center text-4xl my-12'>
        Popular Movies
      </h1>
      {/* Movies Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 place-items-center'>
        {data}
      </div>
      <LoadMore />
    </main>
  );
}
