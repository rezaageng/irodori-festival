import { useSpring, animated } from '@react-spring/web';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [mobile, setMobile] = useState<boolean>(false);
  const [transparent, setTransparent] = useState<boolean>(true);
  const [zIndex, setZIndex] = useState<string>('z-10');

  const ref = useRef<HTMLDivElement>(null);
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

  const transparentNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) {
        setTransparent(false);
      } else setTransparent(true);

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
      if (router.pathname === '/') {
        if (window.scrollY === 0) setTransparent(true);
        window.addEventListener('scroll', transparentNavbar);
      }
      if (router.pathname !== '/') setTransparent(false);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('scroll', transparentNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY, router.pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 10) setZIndex('z-40');
      if (window.scrollY <= 10) setZIndex('z-40 sm:z-10');
    }
  }, [lastScrollY]);

  return (
    <animated.nav
      ref={ref}
      style={mobile ? navAnimatedMobile : navAnimated}
      className={`${
        transparent && !mobile
          ? 'transition bg-transparent'
          : 'transition bg-irodori-primary shadow-up'
      } fixed left-0 w-full sm:bottom-auto px-6 flex ${zIndex}`}
    >
      <div className="hidden sm:flex shrink-0 ">
        <Image
          src="/assets/logo/zephyr.png"
          alt="zephyr"
          width={150}
          height={53}
          priority
        />
      </div>
      <div className="flex gap-4 justify-around sm:justify-end p-2 w-full">
        <Link href="/" passHref>
          <div
            className={`${
              transparent
                ? 'sm:hover:bg-irodori-secondary/30'
                : 'sm:hover:bg-irodori-secondary'
            } nav-wrapper`}
          >
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
          <div
            className={`${
              transparent
                ? 'sm:hover:bg-irodori-secondary/30'
                : 'sm:hover:bg-irodori-secondary'
            } nav-wrapper`}
          >
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
          <div
            className={`${
              transparent
                ? 'sm:hover:bg-irodori-secondary/30'
                : 'sm:hover:bg-irodori-secondary'
            } nav-wrapper`}
          >
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
