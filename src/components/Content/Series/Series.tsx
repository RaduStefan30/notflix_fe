import { useEffect, useState } from "react";
import { getSeries } from "../../../utils/api";
import Media from "../Media/Media";

const Series = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const media = async () => {
      const media = (await getSeries()) as any;
      setMedia(media);
    };
    media();
  }, []);
  return <Media media={media} />;
};

export default Series;
