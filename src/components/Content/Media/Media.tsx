import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Media = (props: { media: any }) => {
  const { media } = props;

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 4,
      slidesOffsetAfter: 0,
      spaceBetween: 10,
    });
  }, [media]);

  return (
    <div className="media">
      {media.length ? (
        <div className="swiper">
          <div className="swiper-wrapper">
            {media.map((item: any) => {
              return (
                <div className="swiper-slide" key={item._id}>
                  <img src={item.image} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Media;
