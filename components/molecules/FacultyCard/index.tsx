import React from "react";
import Image from "next/image";
import { FacultyData } from "@/types";
import Link from "next/link";

const FacultyCard = ({ faculty }: { faculty: FacultyData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 hover:shadow-2xl px-8 py-6 rounded-2xl bg-white">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${faculty.thumbnail}`}
        width="0"
        height="0"
        sizes="100vw"
        alt="faculty image"
        className="w-full h-56 md:w-2/5 object-cover rounded-lg"
      />
      <div className="md:w-3/5 flex flex-col justify-between items-start gap-5 md:border-r-4 border-r-primary-500 rounded-l">
        <h3 className="text-2xl md:text-4xl font-bold">{faculty.title}</h3>
        <p className="text-sm md:text-lg font-medium">
          {faculty.short_description}
        </p>
        <Link
          href={`/faculty/${faculty.id}`}
          className="rounded-xl border py-2 px-4 hover:bg-secondary-50 w-full md:w-auto cursor-pointer"
        >
          Batafsil
        </Link>
      </div>
    </div>
  );
};

export default FacultyCard;
