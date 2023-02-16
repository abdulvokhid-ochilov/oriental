import React from "react";
import Image from "next/image";

const Hemis = ({
  name,
  src,
  hover,
}: {
  name: string;
  src: any;
  hover: any;
}) => {
  return (
    <div className="bg-white hover:bg-gradient-green hover:text-white p-3 lg:p-5 border-white border-2 rounded-lg flex flex-col items-center w-40 lg:w-56">
      <Image src={src} alt="icon" />
      <span className="lg:text-lg text-sm">HEMIS - {name}</span>
    </div>
  );
};

export default Hemis;
