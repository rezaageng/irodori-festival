import { ParallaxBanner } from 'react-scroll-parallax';

const ParallaxComponent = () => (
  <ParallaxBanner
    layers={[
      {
        image: '/assets/parallax/bg.png',
        expanded: false,
        translateY: ['0%', '100%'],
        shouldAlwaysCompleteAnimation: true,
      },
      {
        image: '/assets/parallax/board.png',
        expanded: false,
        translateY: ['0%', '70%'],
        shouldAlwaysCompleteAnimation: true,
      },
      {
        image: '/assets/parallax/branch.png',
        expanded: false,
        translateY: ['0%', '50%'],
        shouldAlwaysCompleteAnimation: true,
      },
      {
        image: '/assets/parallax/rock.png',
        expanded: false,
        translateY: ['0%', '20%'],
        shouldAlwaysCompleteAnimation: true,
      },
    ]}
    className="aspect-video"
  />
);

export default ParallaxComponent;
