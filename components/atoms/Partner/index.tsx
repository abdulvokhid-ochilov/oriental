import React from "react";
import Image from "next/image";

const Partner = ({ image, title }: { image: any; title: string }) => {
  return (
    <div className="flex flex-col items-center w-60 gap-5">
      <Image src={image} alt="partner logo" />
      <p className="text-sm md:text-lg font-semibold text-center">{title}</p>
    </div>
  );
};

export default Partner;
