import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ImageGrid from '../components/ImageGrid';
import { IImages } from '../types/images';
import ImageFull from '../components/ImageFull';

const Gallery = () => {
  const [img, setImg] = useState<IImages[]>([]);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [imgIndex, setImgIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api');
      setImg(res.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Gallery / Irodori Festival</title>
      </Head>
      <div className="p-4 sm:mt-14 bg-irodori-primary">
        {fullscreen && (
          <ImageFull
            img={img}
            imgIndex={imgIndex}
            setFullscreen={setFullscreen}
            setImgIndex={setImgIndex}
          />
        )}

        <ImageGrid
          img={img}
          setFullscreen={setFullscreen}
          setImgIndex={setImgIndex}
        />
      </div>
    </>
  );
};

export default Gallery;
