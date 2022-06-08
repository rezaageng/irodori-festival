import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { IImages } from '../types/images';

interface IProps {
  img: IImages[];
  imgIndex: number | null;
  setFullscreen: Dispatch<SetStateAction<boolean>>;
  setImgIndex: Dispatch<SetStateAction<number | null>>;
}

// eslint-disable-next-line object-curly-newline
const ImageFull = ({ img, imgIndex, setFullscreen, setImgIndex }: IProps) => (
  <div className="p-4 fixed top-0 left-0 w-full min-h-screen bg-transparent backdrop-blur-sm z-50 flex flex-col items-center justify-center">
    <div className="max-w-5xl">
      {imgIndex !== null && (
        <Image
          src={img[imgIndex].src}
          alt="iradori pics"
          width={1920}
          height={1080}
          objectFit="contain"
        />
      )}
    </div>
    <button
      className="bg-indigo-500"
      type="button"
      onClick={() => {
        setFullscreen(false);
        setImgIndex(null);
      }}
    >
      close
    </button>
  </div>
);

export default ImageFull;
