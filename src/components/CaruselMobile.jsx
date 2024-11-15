import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import playIcon from "../assets/img/play-icon.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const CaruselMobile = ({ data, btnStyle, onClickIframe }) => {
  const [screenSize, setScreenSize] = useState(320);
  const mobileRedBtn =
    btnStyle === "red"
      ? "consult_swiper_media-26-red"
      : "consult_swiper_media-26";
  const redBtn =
    btnStyle === "red"
      ? "consult_swiper_media-45-red"
      : "consult_swiper_media-45";
  const onClick = (url) => {
    onClickIframe(url, true);
  };
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);
  return (
    <div className="pb-20 mx-7 max-sm:p-0 max-sm:mx-1">
      <Swiper
        // install Swiper modules
        className={` ${screenSize > 500 ? redBtn : mobileRedBtn}`}
        // className="consult_swiper_media-45 consult_swiper_media-26"
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide className="consult_swiper_swiper_slide" key={item.id}>
            <div
              className={`mx-auto ${
                screenSize > 500 ? "w-80p" : "w-75p"
              } relative`}
            >
              <img
                src={`https://i.ytimg.com/vi/${item.youtube_id}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw58fys_Jng5VRL8d6UHrOrOudtQ`}
                className="aspect-video"
                alt=""
              />
              <button
                className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
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

export default CaruselMobile;
