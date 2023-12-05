'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

interface SearchProps {}

function Search({}: SearchProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      e.target.value.length > 2 && params.set('q', e.target.value);
    } else {
      params.delete('q');
    }

    replace(`/search/?${params}`);
  }, 300);

  return (
    <div className='mx-auto max-w-md'>
      <div className='relative mx-auto w-max'>
        <input
          type='search'
          className='peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:text-textParagraph focus:pl-16 focus:pr-4'
          onChange={handleSearch}
        />
        {/* Magnifying Icon */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent px-3.5 peer-focus:text-textParagraph '
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
    </div>
  );
}

export default Search;
