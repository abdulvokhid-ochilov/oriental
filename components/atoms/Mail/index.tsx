import React from "react";
import mail from "../../../assets/mail.svg";
import Image from "next/image";

const Mail = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="bg-white rounded-3xl w-9 md:w-16 h-6 md:h-11 flex justify-center p-1 md:p-0">
        <Image src={mail} alt="mail" />
      </div>
      <span className="text-sm md:text-lg text-white font-normal md:font-medium">
        qabuloriental@.uz
      </span>
    </div>
  );
};

export default Mail;
