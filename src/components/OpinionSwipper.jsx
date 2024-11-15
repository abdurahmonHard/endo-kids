import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import playIcon from "../assets/img/play-icon.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const OpinionSwipper = ({ data, onClickIframe }) => {
  const onClick = (url) => {
    onClickIframe(url, true);
  };
  return (
    <div>
      <div className="w-full overflow-hidden relative ">
        <Swiper
          // install Swiper modules
          className={`opinion_swiper_media-60`}
          // className="consult_swiper_media-45 consult_swiper_media-26"
          slidesPerView={2}
          spaceBetween={150}
          loop={true}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide className="consult_swiper_swiper_slide" key={item.id}>
              <div className={``}>
                <img
                  src={`https://i.ytimg.com/vi/${item.youtube_id}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw58fys_Jng5VRL8d6UHrOrOudtQ`}
                  className="aspect-video"
                  alt=""
                />
              </div>
              <button
                className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
                onClick={() => onClick(item.youtube_id)}
              >
                <img src={playIcon} className="play-icon" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OpinionSwipper;
