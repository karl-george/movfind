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
          <ul className='flex justify-center items-center gap-12 text-textParagraph text-lg'>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className='border-none focus:none'>
                  Genre
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-96 flex flex-row flex-wrap  gap-4'>
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
            <li>Year</li>
            <li>Country</li>
          </ul>
        </div>
        {/* Search Login */}
        <div className='text-textParagraph'>
          Search Login
          {/* Search */}
          {/* Login */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
