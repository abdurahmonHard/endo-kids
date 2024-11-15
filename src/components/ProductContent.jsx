import React from "react";
import img from "../assets/img/product-water.png";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const ProductContent = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col" id="ProductContent">
      <div className="product-content_top"></div>
      <div className="product-content_bg">
        <div className="container">
          <Fade bottom>
            <div className="pl-30 pt-16 pr-18 pb-12 product_content_box product_box_border flex pt-11 max-xl:flex-col max-md:mx-1 max-md:px-0">
              <div className="flex flex-col w-1/2 max-xl:w-full">
                <h1 className="ml-125 font-black text-white text-42 mb-9 max-md:text-26 max-md:text-center max-md:m-6">
                  {t("ProductContent.title")}
                </h1>
                <img src={img} alt="Drink" className="w-full" />
              </div>
              <div className="w-1/2 text-white max-xl:w-full">
                {i18next
                .t("ProductContent.cards", { returnObjects: true }).map((item) => (
                  <div
                    className="product_right_content mr-16 mb-5 max-xl:m-0 max-xl:mx-3 max-xl:mb-5"
                    key={item.id}
                  >
                    <div className="px-30 py-5">
                      <h3 className="text-2xl">{item.title}</h3>
                      <p className="text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="product-content_bottom"></div>
    </section>
  );
};

export default ProductContent;
