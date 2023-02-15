import React from "react";
import logo from "../../../assets/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center flex-none">
      <Image src={logo} alt="logo" className="w-14 md:w-auto" />
    </div>
  );
};

export default Logo;
