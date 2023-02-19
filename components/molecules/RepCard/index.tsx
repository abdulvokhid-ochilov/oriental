import { Representative } from "@/types";
import Image from "next/image";
import React from "react";

const RepCard = ({ representative }: { representative: Representative }) => {
  return (
    <div className="flex flex-col md:flex-row border-b gap-10 py-5 md:items-start">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${representative.picture}`}
        alt="representative image"
        width="0"
        height="0"
        sizes="100vw"
        className="object-cover w-64 h-80 rounded-lg mx-auto md:mx-0"
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-semibold md:text-2xl md:font-bold text-left">
          {representative.job.job}
        </h1>
        <span className="text-lg font-semibold text-primary">
          {representative.name}
        </span>
        <span className="text-lg font-semibold">
          Qabul vaqti: {representative.time}
        </span>
        <span className="text-lg font-semibold">
          Tel: {representative.phone}
        </span>
      </div>
    </div>
  );
};

export default RepCard;
