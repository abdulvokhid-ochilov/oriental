import { Vacancy } from "@/types";
import React from "react";
import Error from "next/error";
import Custom404 from "../404";
import Link from "next/link";

const Vacancy = ({
  vacancy,
  errorCode,
}: {
  vacancy: Vacancy;
  errorCode: number;
}) => {
  if (errorCode) {
    return errorCode === 404 ? <Custom404 /> : <Error statusCode={errorCode} />;
  }

  return (
    <div className="mt-14 md:mt-48 px-3 py-16 bg-white">
      <div className="max-w-[806px] mx-auto flex flex-col gap-5">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <h2 className="text-2xl md:text-4xl font-bold">{vacancy.job.job}</h2>
          <Link
            href={`/vacancy/apply/${vacancy.id}`}
            className="rounded-xl border border-secondary-300 py-2 px-5 bg-white hover:bg-secondary-50 w-fit cursor-pointer text-xl font-semibold text-center"
          >
            ariza qoldirish
          </Link>
        </div>

        <p className="text-sm md:text-lg font-normal">{vacancy.description}</p>
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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/vacancies/vacancies-public/${id}`
  );
  const errorCode = res.ok ? false : res.status;

  const vacancy: Vacancy = await res.json();

  return {
    props: { errorCode, vacancy },
  };
};

export default Vacancy;
