import React from "react";

const ModalContact = ({ title, text, status }) => {
  return (
    <div
      className={`modal_contact img_modal fixed flex items-center justify-center w-screen h-screen top-0 left-0 z-20 ${
        status ? "block" : "hidden"
      }`}
    >
      <div className="bg-thirdBackground rounded-3xl max-sm:w-full max-sm:h-full">
        <div className="my-10 mx-16 flex flex-col items-center max-w-lg max-sm:mx-5">
          <div className="text-center text-white mb-6">
            <h1 className="text-4xl max-sm:text-2xl mb-5 max-sm:mt-16">
              {title}{" "}
            </h1>
            <p className="text-lg max-sm:text-base">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContact;
