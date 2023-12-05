'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getMovies } from '@/lib/actions';
import MovieCard, { MovieProp } from './MovieCard';
import Image from 'next/image';

let page = 2;

export type MovieCard = JSX.Element;

function LoadMore() {
  const [data, setData] = useState<MovieCard[]>([]);
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      getMovies(page).then((data) => {
        setData((prevData) => [...prevData, ...data]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 place-items-center'>
        {data}
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
