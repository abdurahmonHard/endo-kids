import React from "react";
import xIcon from "../assets/img/x-icon-white.png";
const ImgModal = ({ url, onClickImgModal }) => {
  const onClick = () => {
    onClickImgModal(url, false);
  };
  return (
    <div className="fixed w-full h-full top-0 left-0 z-20 img_modal">
      <div
        className="flex items-center justify-center w-full h-full relative"
        onClick={onClick}
      >
        <div className="w-1/2 relative flex items-center justify-center">
          <img src={url} alt="Img" className="w-65 max-sm:w-full" />
        </div>
        <button
          className="w-16 h-16 absolute top-10 right-10"
          onClick={onClick}
        >
          <img src={xIcon} className="w-16 max-sm:w-7" />
        </button>
      </div>
    </div>
  );
};

export default ImgModal;
