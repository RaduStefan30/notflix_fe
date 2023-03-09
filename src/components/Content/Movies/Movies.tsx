import { useEffect, useState } from "react";
import { getMovies } from "../../../utils/api";
import Media from "../Media/Media";

const Movies = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const media = async () => {
      const media = (await getMovies()) as any;
      setMedia(media);
    };
    media();
  }, []);
  return <Media media={media} />;
};

export default Movies;
