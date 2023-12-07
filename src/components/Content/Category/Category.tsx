import { useEffect, useState } from "react";
import { getMovies, getSeries } from "../../../utils/api";
import Zone from "../Zone/Zone";

const Category = ({ category }: { category: string }) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const media = async () => {
      const media =
        category === "movies" ? await getMovies() : await getSeries();
      setMedia(media);
    };
    media();
  }, []);
  return (
    <div className="category">
      <div className="category-hero">Mare film</div>
      <Zone title="All movies" media={media} />
      <Zone title="All movies" media={media} />
      <Zone title="All movies" media={media} />
      <Zone title="All movies" media={media} />
    </div>
  );
};

export default Category;
