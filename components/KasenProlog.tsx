import { ParallaxBanner } from 'react-scroll-parallax';

const KasenProlog = () => (
  <ParallaxBanner
    layers={[
      {
        image: '/assets/kasen/bg.png',
        speed: -20,
      },
    ]}
    className="aspect-video md:aspect-[36/9]"
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-center text-irodori-tertiary p-10 sm:p-4 lg:p-16">
        Long ago, Inazuma had five legendary poets, people bestowed upon them
        the title of The Five Kasen
      </p>
    </div>
  </ParallaxBanner>
);

export default KasenProlog;
