import React from "react";
import xIcon from "../assets/img/x-icon-white.png";

const IframeModal = ({ onClickIframe, iframeUrl }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 img_modal">
      <div className="recommendation_iframe">
        <iframe
          src={`https://www.youtube.com/embed/${iframeUrl}`}
          className="responsive-iframe"

        ></iframe>
        <button className="responsive-iframe-btn">
          <img
            src={xIcon}
            alt="X"
            onClick={() => onClickIframe("", false)}
            className="max-sm:w-8"
          />
        </button>
      </div>
    </div>
  );
};

export default IframeModal;
