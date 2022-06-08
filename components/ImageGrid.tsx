import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IImages } from '../types/images';

interface IProps {
  img: IImages[];
}

const ImageGrid = ({ img }: IProps) => {
  const [index, setIndex] = useState<number>(0);
  const [origin, setOrigin] = useState<string>('');

  const isSm = useMediaQuery({ query: '(min-width: 640px)' });
  const isLg = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    if (isSm) {
      for (let i = 0; i < img.length; i += 1) {
        if (index % 3 === 0) setOrigin('origin-left');
        if (index % 3 === 1) setOrigin('origin-center');
        if (index % 3 === 2) setOrigin('origin-right');
      }
    }

    if (isLg) {
      for (let i = 0; i < img.length; i += 1) {
        if (index % 4 === 0) setOrigin('origin-left');
        if (index % 4 === 1 || index % 4 === 2) setOrigin('origin-center');
        if (index % 4 === 3) setOrigin('origin-right');
      }
    }
  }, [img, index, isLg, isSm]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-2">
      {img.map((item, i) => (
        <div
          key={item.id}
          id={item.id}
          className={`bg-white relative p-2 pb-8 cursor-pointer transition duration-300 sm:hover:delay-300 sm:hover:scale-125 sm:hover:drop-shadow-2xl ${
            i === index ? `z-20 ${origin}` : 'z-0'
          }`}
          onMouseEnter={() => {
            setTimeout(() => {
              setIndex(i);
            }, 300);
          }}
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
