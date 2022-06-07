import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGrid from '../components/ImageGrid';
import { IImages } from '../types/images';

const Gallery = () => {
  const [img, setImg] = useState<IImages[]>([]);
  const [loading, setLoading] = useState(true);

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
      {loading ? <div>loading</div> : <ImageGrid img={img} />}
    </div>
  );
};

export default Gallery;
