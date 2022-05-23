import { ParallaxBanner } from 'react-scroll-parallax';

interface IProps {
  img: string;
  children: string;
  reverse?: boolean;
}

const Kasen = ({ img, children, reverse }: IProps) => (
  <div
    className={`bg-irodori-primary text-irodori-tertiary flex flex-col ${
      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-center`}
  >
    <ParallaxBanner
      layers={[
        {
          image: img,
          speed: -20,
        },
      ]}
      className="aspect-video bg-cover bg-center flex-1"
    />
    <div className="flex-1">
      <p className="p-4 lg:p-16">{children}</p>
    </div>
  </div>
);

Kasen.defaultProps = {
  reverse: false,
};

export default Kasen;
