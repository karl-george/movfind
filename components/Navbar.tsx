import Image from 'next/image';
import Link from 'next/link';
import { getGenres } from '@/app/lib/actions';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Search from '@/components/Search';
import AuthLinks from '@/components/AuthLinks';
import { countries, years } from '@/app/lib/data';
import { ChevronDown } from 'lucide-react';

export interface Genre {
  id: number;
  name: string;
}

interface NavbarProps {}

async function Navbar({}: NavbarProps) {
  const { genres } = await getGenres();

  return (
    <header className='bg-[#131313] w-full fixed z-50 top-0 left-0'>
      <nav className='flex justify-between items-center container py-3'>
        {/* Logo */}
        <div>
          <Link href={'/'}>
            <Image
              src={'/logo.png'}
              width={150}
              height={150}
              alt='MoviFind logo'
            />
          </Link>
        </div>
        {/* Navbar dropdown for genre country year */}
        <div>
          <ul className='hidden lg:flex justify-center items-center gap-12 text-textParagraph text-lg'>
            {/* Genre */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className='border-none focus:none outline-none flex justify-center items-center gap-1'>
                  Genre <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-96 grid grid-cols-3 gap-2'>
                  {genres.map((genre: Genre) => (
                    <DropdownMenuItem key={genre.id}>
                      <Link
                        href={'#'}
                        className='text-textParagraph hover:text-textHeadline text-base'
                      >
                        {genre.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              {/* Year */}
              <DropdownMenu>
                <DropdownMenuTrigger className='border-none focus:none outline-none flex justify-center items-center gap-1'>
                  Year <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-80 grid grid-cols-3 gap-2 place-items-center'>
                  {years.map((year) => (
                    <DropdownMenuItem key={year.year}>
                      <Link
                        href={'#'}
                        className='text-textParagraph hover:text-textHeadline text-base'
                      >
                        {year.year}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            {/* Country */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className='border-none focus:none outline-none flex justify-center items-center gap-1'>
                  Country <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-96 grid grid-cols-3 gap-2'>
                  {countries.map((country) => (
                    <DropdownMenuItem key={country.country}>
                      <Link
                        href={'#'}
                        className='text-textParagraph hover:text-textHeadline text-base'
                      >
                        {country.country}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
        {/* Search Login */}
        <div className='text-textParagraph flex items-center justify-center gap-4'>
          {/* Search */}
          <div className='hidden lg:block'>
            <Search />
          </div>
          {/* Login */}
          <AuthLinks />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
