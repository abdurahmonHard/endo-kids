import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import playIcon from "../assets/img/play-icon.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperMedia = ({ data, onClickIframe }) => {
  const onClick = (url) => {
    onClickIframe(url, true);
  };
  return (
    <div className="pb-20">
      <Swiper
        // install Swiper modules
        className={`consult_swiper h-300`}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide
            className="py-16 consult_swiper_swiper_slide"
            key={item.id}
          >
            <div className="relative flex justify-center items-center">
              <img
                src={`https://i.ytimg.com/vi/${item.youtube_id}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw58fys_Jng5VRL8d6UHrOrOudtQ`}
                className="w-70pp swiper-media-img"
                alt=""
              />
              <button
                className="w-full h-full absolute w-70pp flex items-center justify-center"
                onClick={() => onClick(item.youtube_id)}
              >
                <img src={playIcon} className="play-icon" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperMedia;
