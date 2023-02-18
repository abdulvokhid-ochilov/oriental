import { Media } from "@/types";
import Image from "next/image";
import React from "react";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

const MediaGroup = ({ media }: { media: Media }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left lg:pl-3">
        {media.title}
      </h2>
      <div className="flex flex-wrap gap-5 justify-center">
        <Image
          src={`${URL}${media.images[0]}`}
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover rounded-lg w-[340px] md:w-[295px]"
          alt="university life"
        />
        <Image
          src={`${URL}${media.images[2]}`}
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover rounded-lg w-[340px] md:w-[295px]"
          alt="university life"
        />
        <Image
          src={`${URL}${media.images[1]}`}
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover rounded-lg md:w-[610px] w-[340px] md:h-[440px]"
          alt="university life"
        />
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <Image
          src={`${URL}${media.images[3]}`}
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover rounded-lg md:w-[610px] w-[340px] md:h-[347px]"
          alt="university life"
        />
        <Image
          src={`${URL}${media.images[4]}`}
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover rounded-lg w-[340px] md:w-[610px] md:h-[347px]"
          alt="university life"
        />
      </div>
    </div>
  );
};

export default MediaGroup;
