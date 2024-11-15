import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Modal } from "./index";
const Hero = () => {
  const [buyBtn, setBuyBtn] = useState(false);
  const { t } = useTranslation();

  const closeModal = (val) => {
    setBuyBtn(val);
  };

  return (
    <section className="hero mt-100 max-lg:mt-70 2xl:min-h-screen">
      <Fade bottom>
        <div className="flex box-border container justify-between flex-col max-md:mx-4">
          <div className="w-1/2 max-md:w-full max-md:text-center max-lg:w-full">
            <h1 className="font-extrabold text-7xl text-white leading-90 mt-36 max-lg:mt-5 max-md:text-4xl font_extrabold">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-white mt-1 leading-25 max-md:text-sm">
              {t("hero.desc")}
            </p>
          </div>
          <div className="mt-16 flex justify-between items-center w-1/2 max-md:flex-col max-md:w-full max-md:mt-410 font_bold">
            <button
              className="flex justify-center items-center bg-fourthBackground border-3 btn-radius px-30 py-5 m-10 max-sm:mx-0 max-md:w-full max-md:mb-4 max-md:py-4 ml-0 max-md:mx-0 max-md:ml-4"
              onClick={() => closeModal(true)}
            >
              <span className="whitespace-nowrap pr-5 text-secColor max-md:text-sm max-sm:pr-2">
                {t("hero.leftBtn")}
              </span>
              <div className="w-5 h-5 e bg-transparent">
                <div className="right-arrow"></div>
              </div>
            </button>
            <a href="#ProductContent">
              <button className="flex justify-center items-center bg-transparent border-3 btn-radius px-30 py-5 max-md:px-10">
                <span className="whitespace-nowrap pr-5 text-white max-md:text-sm">
                  {t("hero.rightBtn")}
                </span>
                <div className="w-5 h-5">
                  <div className="exclamation-mark"></div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </Fade>
      <div>
        <Modal
          buyBtn={buyBtn}
          closeModal={closeModal}
          title="So'rov qoldiring"
          text=" Malumotlarni to'ldiring, biz sizga 15 daqiqa ichida qo'ng'iroq
              qilamiz!"
          desc="*Sizning ma'lumotlaringiz xavfsiz va uchinchi shaxslar bilan baham ko'rilmaydi shaxslar"
        />
      </div>
    </section>
  );
};

export default Hero;
