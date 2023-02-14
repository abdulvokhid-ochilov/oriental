import React from "react";
import mail from "../../../assets/mail.svg";
import Image from "next/image";

const Mail = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="bg-white rounded-3xl w-16 h-11 flex justify-center">
        <Image src={mail} alt="mail" />
      </div>
      <span className="">qabuloriental@.uz</span>
    </div>
  );
};

export default Mail;
