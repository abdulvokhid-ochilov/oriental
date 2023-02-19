import { FacultyData } from "@/types";
import React from "react";
import Error from "next/error";
import Custom404 from "../404";
import FacultyNavbar from "@/components/templates/FacultyNavbar";
import FacultyDesc from "@/components/templates/FacultyDesc";
import RepCard from "@/components/molecules/RepCard";

const Faculty = ({
  faculty,
  faculties,
  errorCode,
}: {
  faculty: FacultyData;
  faculties: FacultyData[];
  errorCode: number;
}) => {
  if (errorCode) {
    return errorCode === 404 ? <Custom404 /> : <Error statusCode={errorCode} />;
  }

  const bachelors = faculties.filter((faculty) => faculty.type === "bachelor");
  const masters = faculties.filter((faculty) => faculty.type === "master");

  return (
    <div className="px-3 py-10 bg-white mt-24 md:mt-48">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-10">
        <div className="flex flex-col gap-5 order-last md:order-none items-center">
          <FacultyNavbar
            faculties={bachelors}
            name="Bakalavr"
            id={faculty.id}
          />
          <FacultyNavbar
            faculties={masters}
            name="Magistratura"
            id={faculty.id}
          />
        </div>
        <div>
          <FacultyDesc faculty={faculty} />

          {faculty.representative.map((rep) => (
            <RepCard key={rep.id} representative={rep} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/faculties/public`
  );

  const faculties: FacultyData[] = await res.json();

  res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/faculties/public/${id}`
  );

  const errorCode = res.ok ? false : res.status;

  const faculty: FacultyData = await res.json();

  return {
    props: { errorCode, faculties, faculty },
  };
};

export default Faculty;
