import React from "react";
import { opinionsData } from "../utils/data";
import { OpinionSwipper, CaruselMobile, IframeModal } from "./index";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Opinions = () => {
  const { t } = useTranslation();
  const [iframeModal, setIframeModal] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(null);
  const onClickIframe = (url, status) => {
    setIframeModal(status);
    setIframeUrl(url);
  };

  return (
    <section className="opinions min-h-770 max-xl:min-h-0 ">
      <div className="pb-16 max-md:pb-4 ">
        <Fade bottom>
          <div>
            <h1 className="text-center pt-140 font-black text-42 text-white mb-20 max-xl:pt-0 max-md:text-2xl max-md:mb-4">
              {t("Opinions.title")}
            </h1>
          </div>
        </Fade>

        <Fade bottom>
          <div>
            <div className="max-lg:hidden block container">
              <OpinionSwipper
                data={opinionsData}
                onClickIframe={onClickIframe}
              />
            </div>
            <div className="max-lg:block hidden">
              <CaruselMobile
                data={opinionsData}
                btnStyle="red"
                onClickIframe={onClickIframe}
              />
            </div>
          </div>
        </Fade>
      </div>
      <div className={iframeModal ? "block" : "hidden"}>
        <IframeModal onClickIframe={onClickIframe} iframeUrl={iframeUrl} />
      </div>
    </section>
  );
};

export default Opinions;
