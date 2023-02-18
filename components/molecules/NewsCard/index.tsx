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
  const formattedDate =
    new Date(date).getDate() +
    "." +
    (new Date(date).getMonth() + 1) +
    "." +
    new Date(date).getFullYear();

  return (
    <div className="bg-secondary-50 w-80 md:w-96 rounded-2xl p-3 pb-6 flex flex-col gap-2 hover:shadow-xl">
      <Image
        src={image}
        alt="news image"
        width="0"
        height="0"
        sizes="100vw"
        className="object-cover w-80 md:w-96 h-56 rounded-lg"
      />
      <div className="flex flex-row justify-between">
        <span className="text-lg font-medium">Yangiliklar</span>
        <span className="text-lg font-medium text-primary">
          {formattedDate}
        </span>
      </div>
      <p className="text-sm md:text-lg font-medium">{text}</p>
    </div>
  );
};

export default NewsCard;
