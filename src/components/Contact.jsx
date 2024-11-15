import React, { useRef, useState } from "react";
import img from "../assets/img/contact_img.png";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ModalContact } from "./index";

const Contact = ({ darkMode }) => {
  const [userName, setUserName] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [status, setStatus] = useState(false);
  const userNameRef = useRef();
  const mobileNumRef = useRef();
  const { t } = useTranslation();

  const hash_name = "#endomarine_web";
  const chat_id_production = "-1001980037018";
  const token = "6134659438:AAFkLIkvTQJ4Oh-CRY3JfCiToJzdJL48jZc";
  const payload_url = `https://api.telegram.org/bot${token}`;
  const text = `Ism:${userName}\n${mobileNum.slice(0, 9)}\n${hash_name}`;
  const data = { chat_id: chat_id_production, text };
  const sendPostRequest = async () => {
    try {
      const resp = await axios.post(`${payload_url}/sendMessage`, { ...data });
      setStatus(true);
      setTimeout(() => {
        window.location.replace("https://www.instagram.com/numakids.uz/");
      }, 5000);
      return () => clearTimeout();
    } catch (err) {
      // Handle Error Here
      console.error("Error==", err);
    }
  };

  const submitBtn = () => {
    if (
      userName.trim() !== "" &&
      userName.trim().length > 3 &&
      mobileNum.length === 9
    ) {
      setUserName("");
      setMobileNum("");
      sendPostRequest();
    } else if (userName.trim() == "" || userName.trim().length < 3) {
      userNameRef.current.focus();
    } else {
      mobileNumRef.current.focus();
    }
  };

  return (
    <section className={`contact`} id="contact">
      <div
        className={`${
          !darkMode ? "contact_bg_white_top max-sm:h-24" : "pt-36"
        } max-sm:pt-0`}
      ></div>
      <div
        className={`${!darkMode ? "contact_bg_white" : ""} pb-40 max-sm:pb-0`}
      >
        <Fade bottom>
          <div className="flex container max-xl:flex-col">
            <div className="flex flex-col w-1/2 max-xl:w-full max-xl:items-center">
              <div
                className={`max-xl:text-center ${
                  darkMode ? "text-white" : "text-secColor"
                }`}
              >
                <h2 className="text-42 mb-1 max-md:text-26 max-md:font-bold">
                  {t("contact.title")}
                </h2>
                <p className="text-xl mb-10 max-xl:text-center max-md:text-base">
                  {t("contact.desc")}
                </p>
              </div>
              <div className="flex flex-col w-1/2 max-md:w-full max-md:items-center ">
                <div className="w-420 border-2 btn-radius discount_input_div mb-5 max-sm:w-full">
                  <input
                    ref={userNameRef}
                    type="text"
                    className="w-230 bg-transparent text-white discount_input_left p-30"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder={t("contact.inputNamePlaceholder")}
                  />
                </div>
                <div className="text-white w-420 border-2 btn-radius discount_input_div mb-5 max-sm:w-full max-sm:flex-nowrap">
                  <span className="pl-30">+998</span>
                  <input
                    ref={mobileNumRef}
                    type="number"
                    placeholder="( __ ) ___ __ __"
                    value={mobileNum}
                    onChange={(e) => setMobileNum(e.target.value)}
                    className="w-230 bg-transparent text-white discount_input_left p-30 pl-1 max-sm:pr-3 max-sm:w-1/2"
                  />
                </div>
                <div className="flex w-420  justify-center max-sm:w-full max-sm:mb-4">
                  <button
                    className="px-30 py-15 rounded-27 bg-thirdBackground text-base text-white text-center "
                    onClick={submitBtn}
                  >
                    {t("contact.btn")}
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-10 -ml-20 max-xl:m-0 2xl:mr-0">
              <img src={img} alt="Contact" className="w-full" />
            </div>
          </div>
        </Fade>
      </div>
      <div>
        <ModalContact
          title="So'ro'vingiz yuborildi!"
          text="Xodimlarimiz tez orada siz bilan bo'g'lanishadi"
          status={status}
        />
      </div>
    </section>
  );
};

export default Contact;
