import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import callIcon from "../assets/img/call-calling.png";
import navCategory from "../assets/img/nav-category.png";
import xIcon from "../assets/img/x-icon.png";
import vector from "../assets/img/Vector.png";
import { navData } from "../utils/data";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [showSelected, setShowSelected] = useState(navData[0]);
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onSelectClick = (id) => {
    setShowSelected(navData[id - 1]);
    changeLanguage(navData[id - 1].encode);
    setShowSelect(false);
  };

  return (
    <>
      <div className="w-full bg-white fixed top-0 text-base z-10">
        <nav className="navbar flex items-center justify-between container box-border h-100 max-lg:hidden">
          <div className="flex items-center">
            <div className="top w-33 mr-70">
              <a href="#" rel="noreferrer">
                <img src={logo} alt="Logo" className="w-14 max-w-none" />
              </a>
            </div>
            <div className="center text-primary w-33 border-box">
              <ul className="flex">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    className="px-30 py-15 hover:bg-navHoverBackground btn-radius-nav whitespace-nowrap"
                  >
                    {t("navData.mainPage")}
                  </a>
                </li>
                <li>
                  <a
                    href="#sertifikat"
                    rel="noreferrer"
                    className="px-30 py-15 hover:bg-navHoverBackground btn-radius-nav"
                  >
                    {t("navData.qualification")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    rel="noreferrer"
                    className="px-30 py-15 hover:bg-navHoverBackground btn-radius-nav"
                  >
                    {t("navData.contact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottom w-33 flex items-center">
            <div className="mr-9 cursor-pointer">
              <div
                className="flex w-full items-center p-4"
                onClick={() => setShowSelect(!showSelect)}
              >
                <img
                  src={showSelected.img_url}
                  alt=""
                  className="mr-2.5 w-10"
                />
                <p className="mr-3 text-secColor">{showSelected.name}</p>
                <img src={vector} alt="" className="w-3.5 h-2" />
              </div>

              <div
                className={`flex flex-col fixed top-100 bg-white gap-y-4 p-4 ${
                  showSelect ? "block" : "hidden"
                }`}
              >
                {navData?.map((item) => (
                  <div
                    className="flex w-full items-center"
                    key={item.id}
                    onClick={() => onSelectClick(item.id)}
                  >
                    <img src={item?.img_url} alt="" className="mr-2.5 w-10" />
                    <p className="mr-3 text-secColor">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <a href="tel:+998712032223">
              <button className="flex items-center bg-thirdBackground py-4 pr-10 pl-8 btn-radius-nav-btn text-white navbar_call_btn">
                <img src={callIcon} alt="Call" className="mr-2" />
                <span className="whitespace-nowrap">+998 71 203 22 23</span>
              </button>
            </a>
          </div>
        </nav>
        <nav className=" hidden max-lg:flex justify-between items-center ml-2.5 mr-4 h-70">
          <div>
            <a href="#" rel="noreferrer">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="">
            <div className="w-24 cursor-pointer">
              <div
                className="flex w-full items-center p-4"
                onClick={() => setShowSelect(true)}
              >
                <img
                  src={showSelected.img_url}
                  alt=""
                  className="mr-2.5 w-10"
                />
              </div>

              <div
                className={`flex flex-col fixed top-70 bg-white gap-y-4 p-4 ${
                  showSelect ? "block" : "hidden"
                }`}
              >
                {navData?.map((item) => (
                  <div
                    className="flex w-full items-center"
                    key={item.id}
                    onClick={() => onSelectClick(item.id)}
                  >
                    <img src={item.img_url} alt="" className="mr-2.5 w-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            {!nav && (
              <img
                src={navCategory}
                alt="Category"
                onClick={() => setNav(true)}
              />
            )}
            {nav && (
              <img
                src={xIcon}
                alt="X"
                className="w-7 h-7"
                onClick={() => setNav(false)}
              />
            )}
          </div>

          <div
            className={`flex justify-center items-center flex-col bg-white w-full h-full nav_fixed nav_fixed-${
              nav ? "active" : ""
            }`}
          >
            <ul className="flex flex-col items-center gap-y-12 mb-8 center text-primary text-base ">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="px-30 py-15 hover:bg-navHoverBackground btn-radius-nav whitespace-nowrap"
                  onClick={() => setNav(false)}
                >
                  {t("navData.mainPage")}
                </a>
              </li>
              <li>
                <a
                  href="#sertifikat"
                  rel="noreferrer"
                  className="px-30 py-15 hover:bg-navHoverBackground btn-radius-nav"
                  onClick={() => setNav(false)}
                >
                  {t("navData.qualification")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  rel="noreferrer"
                  className="px-30 py-15 hover:bg-navHoverBackground btn-radius-nav"
                  onClick={() => setNav(false)}
                >
                  {t("navData.contact")}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a href="tel:+998712032223">
                <button className="flex items-center bg-thirdBackground py-4 pr-10 pl-8 btn-radius-nav-btn text-white">
                  <img src={callIcon} alt="Call" className="mr-2" />
                  <span className="whitespace-nowrap">+998 71 203 22 23</span>
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
