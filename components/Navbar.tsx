import { useSpring, animated } from '@react-spring/web';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobile, setMobile] = useState(false);
  const ref = useRef(null);

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const navAnimatedMobile = useSpring({
    from: { bottom: show ? '-100px' : '0px', top: 'auto' },
    to: { bottom: show ? '0px' : '-100px' },
    immediate: !ref.current,
  });
  const navAnimated = useSpring({
    from: { top: show ? '-100px' : '0px', bottom: 'auto' },
    to: { top: show ? '0px' : '-100px' },
    immediate: !ref.current,
  });

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (isMobile) setMobile(true);
    else setMobile(false);
  }, [isMobile]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => window.removeEventListener('scroll', controlNavbar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <animated.nav
      ref={ref}
      style={mobile ? navAnimatedMobile : navAnimated}
      className="bg-irodori-primary fixed left-0 w-full sm:bottom-auto px-6 flex transition ease-in-out duration-500`"
    >
      <div className="hidden sm:flex shrink-0 ">
        <Image
          src="/assets/logos/zephyr.png"
          alt="zephyr"
          width={150}
          height={53}
          priority
        />
      </div>
      <div className="flex gap-4 justify-around sm:justify-end p-2 w-full">
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
            <span className="hidden sm:inline">Home</span>
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
            <span className="hidden sm:inline">Gallery</span>
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
            <span className="hidden sm:inline">Art Sources</span>
          </div>
        </Link>
      </div>
    </animated.nav>
  );
};

export default Navbar;
