import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGrid from '../components/ImageGrid';
import { IImages } from '../types/images';
import ImageFull from '../components/ImageFull';

const Gallery = () => {
  const [img, setImg] = useState<IImages[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [imgIndex, setImgIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api');
      setImg(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 sm:mt-14 bg-irodori-primary">
      {fullscreen && (
        <ImageFull
          img={img}
          imgIndex={imgIndex}
          setFullscreen={setFullscreen}
          setImgIndex={setImgIndex}
        />
      )}
      {loading ? (
        <div>loading</div>
      ) : (
        <ImageGrid
          img={img}
          setFullscreen={setFullscreen}
          setImgIndex={setImgIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
