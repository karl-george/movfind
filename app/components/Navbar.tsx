import Image from 'next/image';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <header className='bg-[#131313] w-full'>
      <nav className='flex justify-between items-center container py-2'>
        {/* Logo */}
        <div>
          <Image
            src={'/logo.png'}
            width={150}
            height={150}
            alt='MoviFind logo'
          />
        </div>
        {/* Navbar dropdown for genre country year */}
        <div>
          <ul className='flex justify-center items-center gap-12 text-textParagraph'>
            <li>Genre</li>
            <li>Country</li>
            <li>Year</li>
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
