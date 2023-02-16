import React from "react";

const FooterInfo = () => {
  return (
    <div className="order-last md:order-none flex flex-col text-white lg:-ml-60 flex-grow gap-4">
      <div className="flex flex-row gap-2">
        <span className="text-lg w-1/2 text-right">qabul bo’limi :</span>
        <div className="flex flex-col w-1/2">
          <span className="text-lg text-left">+998 95 501 24 42</span>
          <span className="text-lg text-left">+998 93 193 24 42</span>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <span className="text-lg w-1/2 text-right">kadrlar bo’limi :</span>
        <span className="text-lg w-1/2 text-left">+998 97 777 77 77</span>
      </div>
      <div className="flex flex-row gap-2">
        <span className="text-lg w-1/2 text-right">marketing :</span>
        <span className="text-lg w-1/2 text-left">+998 97 777 77 77</span>
      </div>
      <div className="flex flex-row gap-2">
        <span className="text-lg w-1/2 text-right">e-mail :</span>
        <span className="text-lg w-1/2 text-left">info@albukhari-edu.uz</span>
      </div>
    </div>
  );
};

export default FooterInfo;
