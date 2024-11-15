import axios from "axios";
import React, { useRef, useState } from "react";
import xIcon from "../assets/img/x-icon.png";
import { ModalContact } from "./index";

const Modal = ({ title, text: text1, buyBtn, closeModal, desc }) => {
  const [userName, setUserName] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [status, setStatus] = useState(false);
  const userNameRef = useRef();
  const mobileNumRef = useRef();
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
      // closeModal(false);
      sendPostRequest();
    } else if (userName.trim() == "" || userName.trim().length < 3) {
      userNameRef.current.focus();
    } else {
      mobileNumRef.current.focus();
    }
  };
  return (
    <div
      className={`modal_product fixed flex items-center justify-center w-screen h-screen top-0 left-0 z-20 ${
        buyBtn ? "block" : "hidden"
      }`}
    >
      <div className="bg-thirdBackground rounded-3xl max-sm:w-full max-sm:h-full">
        <div className="my-10 mx-16 flex flex-col items-center max-w-lg max-sm:mx-5">
          <div className="text-center text-white mb-6">
            <h1 className="text-4xl max-sm:text-2xl mb-5 max-sm:mt-16">
              {title}{" "}
            </h1>
            <p className="text-lg max-sm:text-base">{text1}</p>
          </div>
          <div>
            <div className="w-420 border-2 btn-radius discount_input_div mb-5 max-sm:w-full">
              <input
                ref={userNameRef}
                type="text"
                className="w-230 bg-transparent text-white discount_input_left p-30 max-sm:p-2.5 max-sm:pl-30"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Sizning ismingiz"
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
                className="w-230 bg-transparent text-white discount_input_left p-30 pl-1 max-sm:pr-3 max-sm:w-1/2 max-sm:p-2.5"
              />
            </div>
          </div>
          <button
            className="px-30 py-15 rounded-27 bg-mainColor text-base text-white text-center "
            onClick={submitBtn}
          >
            Murojaat qiling
          </button>
          <div className="text-white text-base my-5 text-center">
            <p className="text-base max-sm:text-sm">{desc}</p>
          </div>
        </div>
      </div>
      <button className="fixed right-10 top-10 text-4xl text-white">
        <img
          src={xIcon}
          alt="X"
          className="w-16"
          onClick={() => closeModal(false)}
        />
      </button>
      <div>
        <ModalContact
          title="So'ro'vingiz yuborildi!"
          text="Xodimlarimiz tez orada siz bilan bo'g'lanishadi"
          status={status}
        />
      </div>
    </div>
  );
};

export default Modal;
