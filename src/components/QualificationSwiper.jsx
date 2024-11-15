import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import searchIcon from "../assets/img/search-icon.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const QualificationSwiper = ({ data, onClickImgModal }) => {
  const [screenSize, setScreenSize] = useState(320);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  return (
    <div className="pb-20 mx-32 max-sm:mx-0 max-sm:pb-0">
      <Swiper
        // install Swiper modules
        className={`qualification_swiper ${
          screenSize < 900
            ? "qualification_swiper-38"
            : "qualification_swiper-65"
        } ${screenSize < 550 ? "h-300" : "h-400"}`}
        slidesPerView={screenSize < 1000 ? 1 : 4}
        spaceBetween={30}
        navigation={true}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[ Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide className="qualification_slider" key={item.id}>
            <div className={`flex justify-center items-center w-full h-full relative`}>
              <img
                src={item.img_url}
                className="cursor-pointer w-180px qualification_swiper_img"
                onClick={() => onClickImgModal(item.img_url, true)}
              />
              <button
                className="w-full h-full absolute flex items-center justify-center qualification-zoom-in"
                onClick={() => onClickImgModal(item.img_url, true)}
              >
                <img src={searchIcon} className="qualification_zoom_img" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QualificationSwiper;
