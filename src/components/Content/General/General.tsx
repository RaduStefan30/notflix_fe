import { useEffect, useState } from "react";
import { getMainPageMedia } from "../../../utils/api";
import VerticalTile from "../VerticalTile/VerticalTile";

const General = () => {
  const [media, setMedia] = useState([]);
  const [single, setSingle] = useState(false);

  useEffect(() => {
    const media = async () => {
      const media = (await getMainPageMedia()) as any;
      setMedia(media);
    };
    media();
  }, []);
  return (
    <>
      <div className="general">
        <div
          className={
            single ? "general__container single" : "general__container"
          }
        >
          {media.length ? (
            media.map((item: any) => {
              return (
                <VerticalTile
                  single={single}
                  setSingle={setSingle}
                  key={item._id}
                  item={item}
                />
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default General;
