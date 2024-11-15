import React, { useState } from "react";
import { recommendationsData } from "../utils/data";
import { SwiperMedia, CaruselMobile, IframeModal } from "./index";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

const Recommendations = () => {
  const { t } = useTranslation();
  const [iframeModal, setIframeModal] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(null);
  const onClickIframe = (url, status) => {
    setIframeModal(status);
    setIframeUrl(url);
  };
  return (
    <section className="recommendations mb-36 mt-40 max-sm:mb-0 max-sm:mt-0">
      <div className="container-carusel">
        <div>
          <h2 className="text-4xl text-white text-center m-0 max-sm:text-26">
            {t("Recommendation.title")}
          </h2>
          <div className={iframeModal ? "block" : "hidden"}>
            <IframeModal onClickIframe={onClickIframe} iframeUrl={iframeUrl} />
          </div>
        </div>
        <dir className="mt-16 max-sm:p-0 max-sm:mt-6">
          <div className="max-xl:hidden block">
            <Fade bottom>
              <SwiperMedia
                data={recommendationsData}
                onClickIframe={onClickIframe}
              />
            </Fade>
          </div>
          <div className="max-xl:block hidden">
            <Fade bottom>
              <CaruselMobile
                data={recommendationsData}
                btnStyle=""
                onClickIframe={onClickIframe}
              />
            </Fade>
          </div>
        </dir>
      </div>
    </section>
  );
};

export default Recommendations;
