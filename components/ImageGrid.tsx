import Image from 'next/image';
import { IImages } from '../types/images';

interface IProps {
  img: IImages[];
}

const ImageGrid = ({ img }: IProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-2">
    {img.map((item) => (
      <div key={item.id} className="bg-white p-2 pb-8">
        <Image
          src={item.src}
          alt="iradori pics"
          width={1920}
          height={1080}
          objectFit="contain"
        />
      </div>
    ))}
  </div>
);

export default ImageGrid;
