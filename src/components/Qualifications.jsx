import React from "react";
import { qualificationData } from "../utils/data";
import { QualificationSwiper, ImgModal } from "./index";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Qualifications = () => {
  const [imgModal, setImgModal] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const { t } = useTranslation();
  const onClickImgModal = (url, status) => {
    setImgModal(status);
    if (url !== false && url !== undefined) {
      setImgUrl(url);
    }
  };
  return (
    <section className="qualifications flex flex-col" id="sertifikat">
      <div className="qualifications_bg_top max-sm:h-24"></div>
      <div className="qualifications_bg">
        <div className="w-full">
          <div className="container">
            <Fade bottom>
              <div>
                <h1 className="text-center pt-20 font-black text-42 text-secColor max-md:text-3xl max-sm:pt-0 max-sm:text-2xl max-sm:mb-10 mb-14">
                  {t("Qualifications.title")}
                </h1>
              </div>
            </Fade>

            <Fade bottom>
              <div className="w-full">
                <QualificationSwiper
                  data={qualificationData}
                  onClickImgModal={onClickImgModal}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="qualifications_bg_bottom max-sm:h-24"></div>
      <div className={imgModal ? "block" : "hidden"}>
        <ImgModal url={imgUrl} onClickImgModal={onClickImgModal} />
      </div>
    </section>
  );
};

export default Qualifications;
