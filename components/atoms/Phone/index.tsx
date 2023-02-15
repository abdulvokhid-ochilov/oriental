import React from "react";
import Image from "next/image";
import phone from "../../../assets/phone.svg";

const Phone = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="bg-white rounded-3xl w-9 md:w-16 h-6 p-1 md:p-0 md:h-11 flex justify-center">
        <Image src={phone} alt="phone" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm md:text-lg text-white">
          Murojaat uchun / Call center
        </span>
        <span className="text-sm md:text-lg text-white font-bold">
          +998951932442 / +998955012442
        </span>
      </div>
    </div>
  );
};

export default Phone;
