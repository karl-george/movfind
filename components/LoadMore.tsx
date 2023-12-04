'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getMovies } from '@/lib/actions';
import MovieCard, { MovieProp } from './MovieCard';
import Image from 'next/image';

let page = 2;

function LoadMore() {
  const [data, setData] = useState<MovieCard[]>([]);
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      getMovies(page).then((data) => {
        setData((prevData) => [...prevData, ...data.results]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 place-items-center'>
        {data.map((movie: MovieProp, index: number) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>
      <section>
        <div ref={ref}>
          <Image src={'/logo.png'} alt='loading' width={100} height={100} />
        </div>
      </section>
    </div>
  );
}

export default LoadMore;
