import FacultyCard from "@/components/molecules/FacultyCard";
import React from "react";

const Faculties = ({
  faculty,
  image,
  bg = "bg-white",
}: {
  faculty: string;
  image: any;
  bg?: string;
}) => {
  return (
    <div className={`px-3 py-16 ${bg}`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          {faculty} - fakultetlari
        </h2>
        <FacultyCard image={image} name="Filologiya va tillarni  o’qitish" />
        <FacultyCard image={image} name="Filologiya va tillarni  o’qitish" />
        <FacultyCard image={image} name="Filologiya va tillarni  o’qitish" />
        <FacultyCard image={image} name="Filologiya va tillarni  o’qitish" />
        <FacultyCard image={image} name="Filologiya va tillarni  o’qitish" />
        <FacultyCard image={image} name="Filologiya va tillarni  o’qitish" />
        <FacultyCard image={image} name="Filologiya va tillarni  o’qitish" />
      </div>
    </div>
  );
};

export default Faculties;
