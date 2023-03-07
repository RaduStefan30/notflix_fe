import { useEffect, useState } from "react";
import { getMedia } from "../../../utils/api";
import VerticalTile from "../VerticalTile/VerticalTile";

const General = () => {
  const [media, setMedia] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const media = async () => {
      const media = (await getMedia()) as any;
      setMedia(media);
    };
    media();
  }, []);
  // return (
  //   <>
  //     {media.length ? (
  //       media.map((item: any) => {
  //         return (
  //           <div key={item._id}>
  //             <img src={item.image} alt={item.title} />
  //             <h1>{item.title}</h1>
  //           </div>
  //         );
  //       })
  //     ) : (
  //       <div>Loading...</div>
  //     )}
  //   </>
  // );

  return (
    <div className="general">
      <div className="general__container">
        <VerticalTile />
        <VerticalTile />
        <VerticalTile />
        <VerticalTile />
        <VerticalTile />
        <VerticalTile />
        <VerticalTile />
        <VerticalTile />
      </div>
    </div>
  );
};

export default General;
