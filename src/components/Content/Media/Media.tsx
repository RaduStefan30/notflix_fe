import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Media = (props: { media: any }) => {
  const { media } = props;
  return (
    <>
      <div className="media">
        {media.length ? (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={4}
            slidesPerGroup={4}
          >
            {media.map((item: any) => {
              return (
                <SwiperSlide key={item._id}>
                  <img src={item.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Media;
