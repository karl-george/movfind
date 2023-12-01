import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet';
import Search from './Search';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { getGenres } from '@/lib/actions';
import { Genre } from '@/type';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { countries, years } from '@/lib/data';

interface MobileMenuProps {
  status: string;
}

// TODO: Fix dropdown styling

async function MobileMenu({ status }: MobileMenuProps) {
  const { genres } = await getGenres();

  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger>
          <Menu className='lg:hidden' size={26} />
        </SheetTrigger>
        <SheetContent>
          <ul className='flex flex-col text-center gap-y-8 mt-12 text-textParagraph'>
            <li>
              <Search />
            </li>
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
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
