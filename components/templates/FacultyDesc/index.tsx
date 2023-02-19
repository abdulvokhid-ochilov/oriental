import { FacultyData } from "@/types";
import React from "react";
import Image from "next/image";

const FacultyDesc = ({ faculty }: { faculty: FacultyData }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl md:text-4xl font-bold">{faculty.title}</h2>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${faculty.thumbnail}`}
        alt="news image"
        width="0"
        height="0"
        sizes="100vw"
        className="object-cover w-full h-48 md:h-80 rounded-lg"
      />
      <p
        className="text-sm md:text-lg font-normal"
        dangerouslySetInnerHTML={{ __html: faculty.description }}
      ></p>
    </div>
  );
};

export default FacultyDesc;
