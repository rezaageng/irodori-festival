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
const ImageFull = ({ img, imgIndex, setFullscreen, setImgIndex }: IProps) => {
  const nextImageHandler = () => {
    if (imgIndex !== null && imgIndex < img.length - 1) {
      setImgIndex(imgIndex + 1);
    } else {
      setImgIndex(0);
    }
  };

  const prevImageHandler = () => {
    if (imgIndex !== null && imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else {
      setImgIndex(img.length - 1);
    }
  };

  return (
    <div className="bg-gray-400 p-4 fixed top-0 left-0 w-full min-h-screen backdrop-filter backdrop-blur-sm bg-opacity-50 z-40 flex flex-col items-center justify-center gap-4">
      <div className="max-w-5xl bg-white p-2 pb-8 sm:pb-12 md:pb-14">
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
      <div className="flex gap-2">
        <button
          className="bg-irodori-tertiary p-2 rounded-full flex"
          type="button"
          onClick={prevImageHandler}
        >
          <Image
            src="/assets/icons/nav_prev.svg"
            width={24}
            height={24}
            alt="arrow left"
            lazyBoundary="200px"
          />
        </button>
        <button
          className="bg-irodori-tertiary p-2 rounded-full flex"
          type="button"
          onClick={() => {
            setFullscreen(false);
            setImgIndex(null);
          }}
        >
          <Image
            src="/assets/icons/close.svg"
            width={24}
            height={24}
            alt="arrow left"
          />
        </button>
        <button
          className="bg-irodori-tertiary p-2 rounded-full flex"
          type="button"
          onClick={nextImageHandler}
        >
          <Image
            src="/assets/icons/nav_next.svg"
            width={24}
            height={24}
            alt="arrow left"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageFull;
