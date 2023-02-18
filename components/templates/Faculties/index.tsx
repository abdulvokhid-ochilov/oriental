import FacultyCard from "@/components/molecules/FacultyCard";
import { FacultyData } from "@/types";
import React from "react";

const Faculties = ({
  faculties,
  name,
  bg = "bg-white",
}: {
  faculties: FacultyData[];
  name: string;
  bg?: string;
}) => {
  return (
    <div className={`px-3 py-16 ${bg}`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          {name} - fakultetlari
        </h2>
        {faculties.map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} />
        ))}
      </div>
    </div>
  );
};

export default Faculties;
