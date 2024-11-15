import React from "react";
const Card = ({ title, desc, img_url }) => {
  return (
    <div className="bg-mainColor w-48 flex btn-radius text-white box-border adverse_card max-md:items-center max-md:w-full hover:bg-white border-3 border-transparent hover:border-white">
      <div className="m-4">
        <img src={img_url} alt="Card" className="max-h-142 w-36 btn-radius max-sm:w-36" />
      </div>
      <div className="ml-3 my-14 ml-2.5 mr-12 max-md:mx-7 max-md:my-5 max-md:text-center max-md:mt-0 max-md:text-base">
        <h3 className="text-2xl mb-3">{title}</h3>
        <p className="text-base">{desc}</p>
      </div>
    </div>
    
  );
};

export default Card;
