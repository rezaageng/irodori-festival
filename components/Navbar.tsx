import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-irodori-primary fixed bottom-0 left-0 w-full">
      <div className="flex gap-4 justify-around p-2">
        <Link href="/" passHref>
          <div className="nav-wrapper">
            <Image
              src={
                router.pathname === '/'
                  ? '/assets/icons/home-active.svg'
                  : '/assets/icons/home.svg'
              }
              alt="home icon"
              width={24}
              height={24}
            />
            <span className="hidden">Home</span>
          </div>
        </Link>
        <Link href="/gallery" passHref>
          <div className="nav-wrapper">
            <Image
              src={
                router.pathname === '/gallery'
                  ? '/assets/icons/gallery-active.svg'
                  : '/assets/icons/gallery.svg'
              }
              alt="gallery icon"
              width={24}
              height={24}
            />
            <span className="hidden">Gallery</span>
          </div>
        </Link>
        <Link href="/art-sources" passHref>
          <div className="nav-wrapper">
            <Image
              src={
                router.pathname === '/art-sources'
                  ? '/assets/icons/art-active.svg'
                  : '/assets/icons/art.svg'
              }
              alt="art icon"
              width={24}
              height={24}
            />
            <span className="hidden">Art Sources</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
