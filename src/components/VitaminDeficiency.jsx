import React from "react";
import { SecCard } from "../components";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const VitaminDeficiency = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="vitamin_eficiency w-full">
        <div className="container">
          <div className="pt-16 text-white mb-14 max-md:text-center">
            <Fade bottom>
              <h1 className="font-black text-4xl leading-50 pt-2 text-42 font-black max-md:text-2xl">
                {t("VitaminDeficiency.title")}
              </h1>
              <p className="text-xl max-md:text-base">
                {t("VitaminDeficiency.desc")}
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="flex justify-between flex-wrap gap-7 box-border pb-16">
              {i18next
                .t("VitaminDeficiency.cards", { returnObjects: true })
                .map((item) => (
                  <SecCard
                    id={item.id}
                    key={item.id}
                    title={t(item.title)}
                    img_url={process.env.PUBLIC_URL + item.image_url}
                  />
                ))}
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default VitaminDeficiency;
