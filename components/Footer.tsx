import Image from 'next/image';
import React from 'react';

const Footer = () => (
  <footer className="bg-[#A64E46] py-16 px-10 md:px-4 lg:px-10 text-sm 2xl:text-base">
    <div className="flex flex-col gap-4 lg:gap-10">
      <p className="lg:flex-1 lg:self-center lg:text-center">
        This website is not affiliated with HoYoverse.
        <br />
        Genshin Impact, game content and assets are trademarks and copyrights of
        HoYoverse.
      </p>
      <div className="lg:flex lg:flex-1 lg:justify-center lg:gap-10">
        <div>
          <span>Genshin Impact Official Links</span>
          <div className="flex gap-4 lg:justify-center">
            <a
              href="https://genshin.hoyoverse.com/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/gi_logo.svg"
                width={78}
                height={28}
                alt="genshin logo"
              />
            </a>
            <a
              href="https://discord.com/invite/genshinimpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/discord.svg"
                width={28}
                height={28}
                alt="Discord logo"
              />
            </a>
            <a
              href="https://twitter.com/GenshinImpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/twt.svg"
                width={28}
                height={28}
                alt="Twitter logo"
              />
            </a>
          </div>
        </div>
        <div>
          <span>Illustrations by Raku</span>
          <div className="flex gap-4 lg:justify-center">
            <a
              href="https://www.pixiv.net/en/users/1268051"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/pixiv.svg"
                width={72}
                height={28}
                alt="Pixiv logo"
              />
            </a>
            <a
              href="https://twitter.com/RAKU_Ge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/twt.svg"
                width={28}
                height={28}
                alt="Twitter logo"
              />
            </a>
          </div>
        </div>
        <div>
          <span>Developer Links</span>
          <div className="flex gap-4 lg:justify-center">
            <a
              href="https://github.com/rezaageng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/github.svg"
                width={28}
                height={28}
                alt="GitHub logo"
              />
            </a>
            <a
              href="https://twitter.com/rezaageng_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/logo/twt.svg"
                width={28}
                height={28}
                alt="Twitter logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
