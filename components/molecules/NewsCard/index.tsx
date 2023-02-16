import React from "react";
import Image from "next/image";

const NewsCard = ({
  date,
  image,
  text,
}: {
  date: string;
  image: any;
  text: string;
}) => {
  return (
    <div className="bg-secondary-50 w-80 md:w-96 rounded-2xl p-3 pb-6 flex flex-col gap-2 hover:shadow-xl">
      <Image src={image} alt="news image" />
      <div className="flex flex-row justify-between">
        <span className="text-lg font-medium">Yangiliklar</span>
        <span className="text-lg font-medium text-primary">{date}</span>
      </div>
      <p className="text-sm md:text-lg font-medium">{text}</p>
    </div>
  );
};

export default NewsCard;
