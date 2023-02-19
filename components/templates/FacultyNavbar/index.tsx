import Link from "next/link";
import React from "react";
import { FacultyData } from "@/types";

const FacultyNavbar = ({
  faculties,
  name,
  id,
}: {
  faculties: FacultyData[];
  name: string;
  id: number;
}) => {
  return (
    <div className="w-80 md:w-72 rounded-lg bg-secondary-50 flex flex-col overflow-hidden ">
      <h4 className="px-5 py-4 font-semibold text-xl bg-secondary-100">
        Fakultetlar ({name})
      </h4>
      {faculties.map((faculty) => (
        <Link
          key={faculty.id}
          href={`/faculty/${faculty.id}`}
          className={`px-5 py-3 text-lg font-medium border-b hover:text-white hover:bg-gradient-green ${
            id === faculty.id && "text-white bg-gradient-green"
          }`}
        >
          {faculty.title}
        </Link>
      ))}
    </div>
  );
};

export default FacultyNavbar;
