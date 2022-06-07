import Image from 'next/image';
import { useState } from 'react';
import { IImages } from '../types/images';

interface IProps {
  img: IImages[];
}

const ImageGrid = ({ img }: IProps) => {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-2">
      {img.map((item, i) => (
        <div
          key={item.id}
          id={item.id}
          className={`bg-white relative p-2 pb-8 cursor-pointer transition duration-300 hover:delay-300 hover:scale-125 ${
            mouseEnter && i === index ? 'z-10' : 'z-0'
          }`}
          onMouseEnter={() => {
            setMouseEnter(true);
            setTimeout(() => {
              setIndex(i);
            }, 300);
          }}
          onMouseLeave={() => setMouseEnter(false)}
        >
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
};

export default ImageGrid;
