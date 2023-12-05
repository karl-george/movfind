import { searchMovies } from '@/lib/actions';

interface pageProps {}

async function page({ searchParams }: pageProps) {
  const q = searchParams?.q || '';
  const movies = await searchMovies(q);
  return (
    <main className='container mt-28'>
      {/* Title */}
      <h1 className='text-textHeadline text-center text-4xl my-12'>
        Search results for {q}
      </h1>
      {/* Movies Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 place-items-center'>
        {movies}
      </div>
    </main>
  );
}

export default page;
