import Image from 'next/image';
import Link from 'next/link';
import { Genre } from '@/type';
import { getGenres } from '@/lib/actions';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Search from '@/components/Search';
import AuthLinks from '@/components/AuthLinks';

interface NavbarProps {}

async function Navbar({}: NavbarProps) {
  const { genres } = await getGenres();

  return (
    <header className='bg-[#131313] w-full'>
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
          <ul className='hidden md:flex justify-center items-center gap-12 text-textParagraph text-lg'>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className='border-none focus:none outline-none'>
                  Genre
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-96 grid grid-cols-3 gap-3'>
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
              <DropdownMenu>
                <DropdownMenuTrigger className='border-none focus:none outline-none'>
                  Year
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-96 grid grid-cols-3 gap-3'>
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
            <li>Country</li>
          </ul>
        </div>
        {/* Search Login */}
        <div className='text-textParagraph hidden md:flex'>
          {/* Search */}
          <Search />
          {/* Login */}
          <AuthLinks />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
