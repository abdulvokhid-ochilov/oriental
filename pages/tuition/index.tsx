import React from "react";
import { GetServerSideProps } from "next";
import { FacultyData } from "@/types";
import TuitionCard from "@/components/templates/TuitionCard";

const Tuition = ({ faculties }: { faculties: FacultyData[] }) => {
  const bachelors = faculties.filter((faculty) => faculty.type === "bachelor");
  const masters = faculties.filter((faculty) => faculty.type === "master");

  return (
    <div className="mt-14 md:mt-48 px-3 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col">
        <h1 className="text-2xl md:text-4xl font-bold text-primary">
          2022 - 2023 o’quv yili uchun
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white bg-gradient-green md:text-primary md:bg-none px-5 py-2 md:px-0 md:py-0 rounded-lg my-8">
          Bakalavr - fakultetlari
        </h2>
        {bachelors.map((faculty) => (
          <TuitionCard key={faculty.id} faculty={faculty} />
        ))}
        <h2 className="text-2xl md:text-4xl font-bold text-white bg-gradient-green md:text-primary md:bg-none px-5 py-2 md:px-0 md:py-0 rounded-lg my-8">
          Magistratura - fakultetlar
        </h2>
        {masters.map((faculty) => (
          <TuitionCard key={faculty.id} faculty={faculty} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  faculties: FacultyData[];
}> = async (context) => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/faculties/public`
  );

  const faculties: FacultyData[] = await res.json();

  return {
    props: {
      faculties,
    },
  };
};

export default Tuition;
