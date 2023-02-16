import Image from "next/image";
import React from "react";

const TargetCard = ({
  text,
  name,
  image,
}: {
  text: string;
  name: string;
  image: any;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={image} alt="target-icon" className="mx-auto" />
      <h2 className="text-2xl md:text-4xl text-center font-bold">{name}</h2>
      <p className="text-lg font-normal md:px-16">{text}</p>
    </div>
  );
};

export default TargetCard;
