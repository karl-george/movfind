import Link from 'next/link';
import MobileMenu from './MobileMenu';

interface AuthLinksProps {}

function AuthLinks({}: AuthLinksProps) {
  const status = 'unauthenticated';
  return (
    <div>
      {status === 'unauthenticated' ? (
        <Link href={'/login'} className='max-lg:hidden lg:block'>
          Login
        </Link>
      ) : (
        <div className='max-lg:hidden lg:block cursor-pointer'>Avatar</div>
      )}
      <MobileMenu status={status} />
    </div>
  );
}

export default AuthLinks;
