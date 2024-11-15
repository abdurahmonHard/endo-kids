import React from "react";
const SecCard = ({ title, img_url }) => {
  return (
    <div className="vitamin_sec_card w-1/5 flex flex-col btn-radius text-secColor box-border min-w-260 overflow-hidden text-center max-w-275 max-md:mx-3">
      <div className="mb-2 w-full">
        <img src={img_url} alt={title} className="w-full " />
      </div>
      <div className="mb-3">
        <h3 className="text-base mx-6">{title}</h3>
      </div>
    </div>
  );
};

export default SecCard;
