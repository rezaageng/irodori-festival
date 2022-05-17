import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxComponent = () => (
  <Parallax pages={2}>
    <ParallaxLayer
      className="bg-[url('/assets/parallax/bg.png')]"
      style={{ backgroundSize: '100%', aspectRatio: '16/9', height: 'auto' }}
    />
    <ParallaxLayer
      speed={0.5}
      className="bg-[url('/assets/parallax/board.png')]"
      style={{ backgroundSize: '100%', aspectRatio: '16/9', height: 'auto' }}
    />
    <ParallaxLayer
      speed={0.8}
      className="bg-[url('/assets/parallax/branch.png')]"
      style={{ backgroundSize: '100%', aspectRatio: '16/9', height: 'auto' }}
    />
    <ParallaxLayer
      speed={1}
      className="bg-[url('/assets/parallax/rock.png')]"
      style={{ backgroundSize: '100%', aspectRatio: '16/9', height: 'auto' }}
    />
    <ParallaxLayer
      factor={2}
      offset={1}
      speed={0}
      className="bg-irodori-primary"
      style={{ backgroundSize: '100%', aspectRatio: '16/9', height: 'auto' }}
    />
  </Parallax>
);

export default ParallaxComponent;
