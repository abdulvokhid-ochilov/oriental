import React from "react";
import Image from "next/image";
import phone from "../../../assets/phone.svg";

const Phone = () => {
  return (
    <div className="bg-white rounded-3xl w-16 h-11 flex justify-center">
      <Image src={phone} alt="mail" />
    </div>
  );
};

export default Phone;
