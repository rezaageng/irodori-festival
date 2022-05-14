import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-irodori-primary">
    <ul className="flex gap-4 p-4">
      <li className="flex place-items-center">
        <Image
          src="/assets/icons/home.svg"
          alt="home icon"
          width={24}
          height={24}
        />
        <Link href="/">Home</Link>
      </li>
      <li className="flex place-items-center">
        <Image
          src="/assets/icons/gallery.svg"
          alt="home icon"
          width={24}
          height={24}
        />
        <Link href="/gallery">Gallery</Link>
      </li>
      <li className="flex place-items-center">
        <Image
          src="/assets/icons/credits.svg"
          alt="home icon"
          width={24}
          height={24}
        />
        <Link href="/credits">Credits</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
