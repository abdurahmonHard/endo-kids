import React from "react";
import drinksImg from "../assets/img/drinks.png";
import badge from "../assets/img/badge-icon.png";
import Fade from "react-reveal/Fade"
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const UsefulProperties = () => {
  const { t } = useTranslation();
  return (
    <section className="useful_properties">
      <div className="useful_properties_top max-sm:h-24"></div>
      <div className="useful_properties_bg">
      <Fade bottom>
      <div className="container flex max-xl:flex-col">
        <div className="w-1/2 border-box max-xl:w-full max-xl:flex max-xl:flex-col max-xl:items-center max-xl:text-center 2xl:mr-8">
          <div className="mr-4">
            <h2 className="capitalize text-42 font-black text-secColor max-xl:text-center max-md:text-26">
              {t("UsefulProperties.title")}
            </h2>
            <p className="text-secColor text-xl max-md:text-base">
            {t("UsefulProperties.desc")}

            </p>
          </div>
          <div>
            <img src={drinksImg} alt="Drinks" className="max-sm:mt-4 max-sm:mb-6" />
          </div>
        </div>
        <div className="flex w-1/2 max-xl:w-full">
          <div className="px-25 py-7 bg-thirdBackground btn-radius max-xl:w-full">
            {i18next
                .t("UsefulProperties.cards", { returnObjects: true }).map((item) => (
              <div
                className="useful_proprties_right pl-16 rounded-36 flex py-4 items-center mb-3 border-box max-md:flex-col max-md:p-4 max-md:pt-30 max-sm:mb-10"
                key={item.id}
              >
                <div className="max-md:-mt-50">
                  <img src={badge} alt="Badge" className="w-10 h-10" />
                </div>
                <div className="ml-4 w-3/4 max-md:ml-0 max-md:w-full max-sm:text-center">
                  <p className="font-base text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Fade>
      </div>
      <div className="useful_properties_bottom max-sm:h-24"></div>
    </section>
  );
};

export default UsefulProperties;
