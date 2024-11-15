import React from "react";
import { Card } from "./index";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


const AdverseEffects = () => {
  const { t } = useTranslation();
  return (
    <section className="adverse_effects w-full max-sm:pb-0 max-xl:pb-20 flex flex-col">
      <div className="adverse_effects_bg_top max-sm:h-24"></div>
      <div className="adverse_effects_bg">
        <div className="container">
          <div className="text-secColor mb-14 max-sm: ">
            <Fade bottom>
              <h2 className="text-4xl leading-50 pt-2 text-42 max-md:text-26 max-md:text-center">
                {t("AdverseEffects.title")}
              </h2>
              <p className="text-xl max-md:text-base max-md:text-center">
                {t("AdverseEffects.desc")}
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="flex flex-wrap gap-x-10 gap-y-5 box-border pb-50 negative_card_box">
               {i18next
                .t("AdverseEffects.cards", { returnObjects: true })
                .map((item) => (
                  <Card
                    id={item.id}
                    key={item.id}
                    title={t(item.title)}
                    img_url={process.env.PUBLIC_URL + item.img_url}
                    desc={t(item.desc)}
                  />
                ))}
            </div>
          </Fade>
        </div>
      </div>
      <div className="adverse_effects_bg_bottom max-sm:h-24"></div>
    </section>
  );
};

export default AdverseEffects;
